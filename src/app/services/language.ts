import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  currentLanguage = signal<'ar' | 'en'>('ar');

  toggleLanguage() {
    this.currentLanguage.update(lang => lang === 'ar' ? 'en' : 'ar');
    document.documentElement.lang = this.currentLanguage();
    document.documentElement.dir =
      this.currentLanguage() === 'ar' ? 'rtl' : 'ltr';
    window.dispatchEvent(new Event('languageChanged'));
  }
}
