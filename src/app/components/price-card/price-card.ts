import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-price-card',
  imports: [DecimalPipe],
  templateUrl: './price-card.html',
  styleUrl: './price-card.css',
})
export class PriceCard {
  karat = input.required<string>();
  price = input.required<number>();
}
