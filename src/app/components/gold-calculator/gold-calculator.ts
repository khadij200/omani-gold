import { Component, computed, inject, signal } from '@angular/core';
import { Language } from '../../services/language';
import { GoldPrice } from '../../services/gold-price';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-gold-calculator',
  imports: [DecimalPipe],
  templateUrl: './gold-calculator.html',
  styleUrl: './gold-calculator.css',
})
export class GoldCalculator {
   private goldPriceService = inject(GoldPrice);
   selectedKarat = signal('18K');
   weight= signal<number>(0);
   totalPrice = signal<number | null>(null);
   errorMessage = signal<string | null>(null);
   errorType = signal<'weight' | 'price' | null>(null);
   language = inject(Language);

   translatedError = computed(() => {
    if (this.errorType() === null) {
      return null;
    }
    if (this.errorType() === 'price') {
  return this.language.currentLanguage() === 'ar'
    ? 'أسعار الذهب غير متاحة حاليًا، يرجى المحاولة لاحقًا'
    : 'Gold prices are currently unavailable';
}
    return this.language.currentLanguage() === 'ar'
    ? 'يرجى إدخال وزن صحيح أكبر من صفر'
    : 'Please enter a valid weight greater than zero';
   });
   

  changeKarat(value: string) {
    this.selectedKarat.set(value);
    this.totalPrice.set(null);
    this.errorMessage.set(null);
    this.errorType.set(null);
  }

  changeWeight(value: string) {
    this.weight.set(Number(value));
    this.totalPrice.set(null);
    this.errorMessage.set(null);
    this.errorType.set(null);
  }

  calculateGold() {
     if (this.weight() <= 0 || !Number.isFinite(this.weight())) {
      this.totalPrice.set(null);
      this.errorType.set('weight');

      this.errorMessage.set(
      this.language.currentLanguage() === 'ar'
        ? 'يرجى إدخال وزن صحيح أكبر من صفر'
        : 'Please enter a valid weight greater than zero'
      ) ;
     return;
     }

     const gold = this.goldPriceService.goldPrices.find(
      item => item.karat === this.selectedKarat()
    );

    if (!gold) {
      this.totalPrice.set(null);
      this.errorType.set('price');
      this.errorMessage.set(
        this.language.currentLanguage() === 'ar'
          ?  'أسعار الذهب غير متاحة حاليًا، يرجى المحاولة لاحقًا'
            : 'Gold prices are currently unavailable'
      );
      return;
      
    }
    
   
    this.errorMessage.set(null);
    this.errorType.set(null);
    this.totalPrice.set(gold.price * this.weight());
  }
}
