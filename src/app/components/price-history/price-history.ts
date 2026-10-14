import { Component, inject } from '@angular/core';
import { Language } from '../../services/language';
import { GoldPrice } from '../../services/gold-price';
import { DecimalPipe, DatePipe  } from '@angular/common';
@Component({
  selector: 'app-price-history',
  imports: [DecimalPipe,DatePipe],
  templateUrl: './price-history.html',
  styleUrl: './price-history.css',
})
export class PriceHistory {
  private goldPriceService = inject(GoldPrice);
  language = inject(Language);

  priceHistory = [...this.goldPriceService.priceHistory].reverse();
  currentPage = 1;
  pageSize = 10;

  get paginatedHistory() {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.priceHistory.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.priceHistory.length / this.pageSize);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
