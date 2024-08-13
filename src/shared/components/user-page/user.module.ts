import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from 'src/shared/components/user-page/layouts/layouts.component';
import { MyAddressesComponent } from './components2/my-addresses/my-addresses.component';
import { MyShipmentsComponent } from './components2/my-shipments/my-shipments.component';
import { SettingsComponent } from './components2/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './components2/personal-info/personal-info.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    LayoutsComponent,
    MyAddressesComponent,
    MyShipmentsComponent,
    SettingsComponent,
    PersonalInfoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzModalModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ]
})
export class UserModule { }
