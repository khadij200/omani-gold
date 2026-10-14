import { Component, signal, inject } from '@angular/core';
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

  goldPrices = this.goldPriceService.goldPrices;

  language = inject(Language);

}
