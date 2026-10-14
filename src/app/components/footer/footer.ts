import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Language } from '../../services/language';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  language = inject(Language);
}
