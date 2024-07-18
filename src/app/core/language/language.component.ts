import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subject, takeUntil} from "rxjs";
import {SessionStorageService} from "ngx-webstorage";
import { LANGUAGES } from '../constants/languega/language.constants';
import { LanguageService } from '../local-services/language-service/language.service';


@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageComponent implements AfterViewInit, OnDestroy, OnInit {
  readonly languages = LANGUAGES;
  sessionStorageLang!: string;
  private readonly destroy$ = new Subject<void>();

  constructor(
    public langService: LanguageService,
    private readonly translateService: TranslateService,
    private readonly cdr: ChangeDetectorRef,
    private readonly sessionStorageService: SessionStorageService,
  ) {
  }

  ngOnInit(): void {
    this.sessionStorageLang = this.sessionStorageService.retrieve('locale');
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeLanguage(languageKey: string): void {
    this.langService.currentLang = languageKey;
    this.langService.change(languageKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.langService.currentLang = languageKey));
  }

}
