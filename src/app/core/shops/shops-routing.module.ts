import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PopularStoresComponent } from './components/popular-stores/popular-stores.component';
import { MarketsComponent } from './components/markets/markets.component';
import { DepartmentStoresComponent } from './components/department-stores/department-stores.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { BeautyProductsComponent } from './components/beauty-products/beauty-products.component';
import { ChildrenProductsComponent } from './components/children-products/children-products.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { SportsProductsComponent } from './components/sports-products/sports-products.component';
import { HealthProductsComponent } from './components/health-products/health-products.component';
import { OthersComponent } from './components/others/others.component';
import { HouseholdComponent } from './components/household/household.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: '', redirectTo:'popularStores', pathMatch:'full'},
    {path: 'popularStores', component: PopularStoresComponent},
    {path: 'markets', component: MarketsComponent},
    {path: 'departmenStores', component: DepartmentStoresComponent},
    {path: 'clothes', component: ClothesComponent},
    {path: 'shoes', component: ShoesComponent},
    {path: 'beauty-products', component: BeautyProductsComponent},
    {path: 'children-products', component: ChildrenProductsComponent},
    {path: 'electronics', component: ElectronicsComponent},
    {path: 'household', component: HouseholdComponent},
    {path: 'sports-products', component: SportsProductsComponent},
    {path: 'health-products', component: HealthProductsComponent},
    {path: 'others', component: OthersComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
