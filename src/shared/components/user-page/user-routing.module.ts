import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components2/settings/settings.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'parcels', pathMatch: 'full' },
      {
        path: 'myAddress',
        children: [
          { path: '', redirectTo: 'myAcceptance', pathMatch: 'full' },
      
        ],
      },
      {
        path: 'shipments',
        children: [
          { path: '', redirectTo: 'order', pathMatch: 'full' },
        ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: 'personal-info', pathMatch: 'full' },         
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
