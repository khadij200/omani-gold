import { Component, signal, inject, computed } from '@angular/core';
import { Language } from './services/language';
import { GoldPrice } from './services/gold-price';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { GoldCalculator } from './components/gold-calculator/gold-calculator';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { PriceCard } from './components/price-card/price-card';
import { PriceHistory } from './components/price-history/price-history';
import { PriceTrend } from './components/price-trend/price-trend';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer,GoldCalculator,Header,HeroBanner,PriceCard,PriceHistory,PriceTrend],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('omani-gold');

  private goldPriceService = inject(GoldPrice);

  errorMessage = signal<string | null>(null);

  translatedError = computed(() => {
    if(!this.errorMessage()){
      return null;
    }
    return this.language.currentLanguage() === 'ar'
    ? 'يتعذّر تحميل أسعار الذهب، حاول مجددًا'
    : 'Unable to load gold prices. Please try again.';

  });
  
  isLoading = signal<boolean>(true);

  goldPrices: { karat: string; price: number }[] = [];

  language = inject(Language);

  testApi(){
    this.goldPriceService.getGoldPrices().subscribe({ next: data =>{

      console.log(data);
      this.goldPrices = data;
      this.goldPriceService.goldPrices = data;
      this.errorMessage.set(null);
      this.isLoading.set(false);
      
    },

    error: (err) => {
      console.error('Failed to load gold prices:', err);
      this.goldPriceService.goldPrices = [];
      this.errorMessage.set(
      this.language.currentLanguage() === 'ar'
        ? 'يتعذّر تحميل أسعار الذهب، حاول مجددًا'
        : 'Unable to load gold prices. Please try again.'
      );
      this.isLoading.set(false);
    }
    
  });
  }
  ngOnInit() {
  this.testApi();
  }
}