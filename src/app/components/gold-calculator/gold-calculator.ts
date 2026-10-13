import { Component, inject, signal } from '@angular/core';
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

  changeKarat(value: string) {
    this.selectedKarat.set(value);
    this.totalPrice.set(null);
    this.errorMessage.set(null);
}
  changeWeight(value: string) {
    this.weight.set(Number(value));
    this.totalPrice.set(null);
    this.errorMessage.set(null);
}
  calculateGold() {
    const gold = this.goldPriceService.goldPrices.find(
      item => item.karat === this.selectedKarat()
    );
    if (!gold || this.weight() <= 0 || !Number.isFinite(this.weight())) {
      this.totalPrice.set(null);
      this.errorMessage.set('يرجى إدخال وزن صحيح أكبر من صفر');
    return;
    }
    this.errorMessage.set(null);
    this.totalPrice.set(gold.price * this.weight());
}
}
