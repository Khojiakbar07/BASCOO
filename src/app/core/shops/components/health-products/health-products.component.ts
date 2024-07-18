import { Component } from '@angular/core';

@Component({
  selector: 'app-health-products',
  templateUrl: './health-products.component.html',
  styleUrls: ['./health-products.component.scss']
})
export class HealthProductsComponent {
  title = 'Health Products'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'iHerb', img: './assets/images/shops/iHerb.png' },
    ]
  }
}
