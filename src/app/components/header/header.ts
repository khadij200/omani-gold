import { Component, signal, inject } from '@angular/core';
import { Language } from '../../services/language';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = signal(false);
  isDarkMode = signal(false);
  language = inject(Language);

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }
  toggleTheme() {
    this.isDarkMode.update(value => !value);

    document.documentElement.classList.toggle(
      'dark',
      this.isDarkMode()
    );
  //ارسال للمكونات بتغير الوضع
    window.dispatchEvent(new Event('themeChanged'));
  }
}
