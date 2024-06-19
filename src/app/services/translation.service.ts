import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
  }

  public getCurrentLanguage(): string {
    return this.currentLang;
  }
}