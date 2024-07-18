import { APP_INITIALIZER, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/layouts/home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeRu from "@angular/common/locales/ru";
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { AppInitService } from './core/local-services/appInitService/app-init-service.service';
import { LanguageComponent } from './core/language/language.component';
import { FindLanguageFromKeyPipe } from './core/language/find-language-from-key.pipe';
import { CaruselComponent } from 'src/shared/components/home/carusel/carusel.component';
import { HowIsItWorkComponent } from '../shared/components/home/how-is-it-work/how-is-it-work.component';
import { PricesComponent } from '../shared/components/home/prices/prices.component';
import { StoresComponent } from '../shared/components/home/stores/stores.component';
import { ChooseUsComponent } from '../shared/components/home/choose-us/choose-us.component';
import { ReviewsComponent } from '../shared/components/home/reviews/reviews.component';
import { FaqComponent } from '../shared/components/home/faq/faq.component';
import { AboutUsComponent } from './modules/layouts/about-us/about-us.component';
import { ContactsComponent } from './modules/layouts/contacts/contacts.component';
import { PriceComponent } from './modules/layouts/price/price.component';
import { ServicesComponent } from './modules/layouts/services/services.component';
import { HelpsComponent } from './modules/layouts/helps/helps.component';
import { RestrictionsComponent } from 'src/shared/components/restrictions/restrictions.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from '../shared/components/home/map/map.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';


registerLocaleData(localeRu);
export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      appInitService.init();
      resolve(true);
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LanguageComponent,
    FindLanguageFromKeyPipe,
    CaruselComponent,
    HowIsItWorkComponent,
    StoresComponent,
    ChooseUsComponent,
    ReviewsComponent,
    FaqComponent,
    AboutUsComponent,
    PricesComponent,
    ContactsComponent,
    PriceComponent,
    ServicesComponent,
    HelpsComponent,
    RestrictionsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularYandexMapsModule

  ], schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
