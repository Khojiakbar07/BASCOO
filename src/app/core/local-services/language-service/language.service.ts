import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLang: string;

  constructor(
    private readonly translateService: TranslateService,
    private readonly sessionStorageService: SessionStorageService
  ) {
    this.currentLang = this.translateService.currentLang;
    this.onChange().subscribe(lang => (this.currentLang = lang));
  }

  getCurrent(): string {
    return this.currentLang;
  }

  change(langKey: string): Observable<any> {
    return this.translateService.use(langKey);
  }

  onChange(): Observable<string> {
    return this.translateService.onLangChange
      .pipe(
        mergeMap((event: LangChangeEvent) => {
          this.sessionStorageService.store('locale', event.lang);
          return of(event.lang);
        })
      );
  }
}
