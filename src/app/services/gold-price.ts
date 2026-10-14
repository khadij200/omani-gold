import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoldPrice {

  goldPrices = [
    { karat: '18K', price: 39.5 },
    { karat: '21K', price: 46.0 },
    { karat: '22K', price: 48.2 },
    { karat: '24K', price: 52.5 }
  ];
  //تغيرات تجريبية فالسعر
  priceChanges = [
    -1.2, -0.9, -1.1, -0.6, -0.3,
    0.1, -0.2,  0.4,  0.7,  0.5,
    0.9,  1.2,  0.8,  0.4,  0.6,
    0.2, -0.1, -0.4,  0.0,  0.3,
    0.7,  1.0,  0.6,  0.9,  0.5,
    0.2,  0.6,  0.3, -0.1,  0.0
  ];
  priceHistory = Array.from({ length: 30 }, (_, index) => {
    const date = new Date(2026, 8, 13);

    date.setDate(date.getDate() + index);

    return {
      date: date.toISOString().split('T')[0],
      price: 46 + this.priceChanges[index % this.priceChanges.length]
    };
  });
}
