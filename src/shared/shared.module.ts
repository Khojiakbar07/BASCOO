import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AntModules } from './ant-imports';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SettingsComponent } from './components/Setting/settings/settings.component';
import { NoticeComponent } from './components/Setting/notice/notice.component';
import { RecipientComponent } from './components/Setting/recipient/recipient.component';
import { FileComponent } from './components/Setting/file/file.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    AntModules,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NzCarouselModule,
    NzLayoutModule,
    NzDropDownModule,
    NzCheckboxModule,
    NgxWebstorageModule.forRoot({
      prefix: 'app',
      separator: '-',
      caseSensitive: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    AntModules,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NzLayoutModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzButtonModule,
    TranslateModule,
    NzCarouselModule,
    CarouselModule,
  ],
  declarations: [SettingsComponent, NoticeComponent, RecipientComponent, FileComponent],
})
export class SharedModule {}
