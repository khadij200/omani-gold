import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  language = inject(Language);
}
