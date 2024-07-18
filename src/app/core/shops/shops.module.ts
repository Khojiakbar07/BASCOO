import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { MainComponent } from './components/main/main.component';
import { PopularStoresComponent } from './components/popular-stores/popular-stores.component';
import { MarketsComponent } from './components/markets/markets.component';
import { DepartmentStoresComponent } from './components/department-stores/department-stores.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { BeautyProductsComponent } from './components/beauty-products/beauty-products.component';
import { ChildrenProductsComponent } from './components/children-products/children-products.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HouseholdComponent } from './components/household/household.component';
import { SportsProductsComponent } from './components/sports-products/sports-products.component';
import { HealthProductsComponent } from './components/health-products/health-products.component';
import { OthersComponent } from './components/others/others.component';


@NgModule({
  declarations: [
    MainComponent,
    PopularStoresComponent,
    MarketsComponent,
    DepartmentStoresComponent,
    ClothesComponent,
    ShoesComponent,
    BeautyProductsComponent,
    ChildrenProductsComponent,
    ElectronicsComponent,
    HouseholdComponent,
    SportsProductsComponent,
    HealthProductsComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
