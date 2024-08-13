import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from 'src/shared/components/user-page/layouts/layouts.component';
import { MyShipmentsComponent } from './components2/my-shipments/my-shipments.component';
import { SettingsComponent } from './components2/settings/settings.component';
import { MyAddressesComponent } from './components2/my-addresses/my-addresses.component';
import { PersonalInfoComponent } from './components2/personal-info/personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'parcels', pathMatch: 'full' },
      {
        path: 'myAddress',
        component: MyAddressesComponent,
        children: [
          { path: '', redirectTo: 'myAcceptance', pathMatch: 'full' },
      
        ],
      },
      {
        path: 'shipments',
        component: MyShipmentsComponent,
        children: [
          { path: '', redirectTo: 'order', pathMatch: 'full' },
        ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
          { path: 'personal-info', component: PersonalInfoComponent},
         
        ],
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
