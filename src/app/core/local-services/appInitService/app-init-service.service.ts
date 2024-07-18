import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { LanguageService } from '../language-service/language.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(
    private sessionStorageService: SessionStorageService,
    private langService: LanguageService,
  ) { }

  init() {
    const langKey = this.sessionStorageService.retrieve('locale') ?? 'ru';
    this.langService.change(langKey);
  }
}
