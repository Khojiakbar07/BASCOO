import { Component } from '@angular/core';

@Component({
  selector: 'app-beauty-products',
  templateUrl: './beauty-products.component.html',
  styleUrls: ['./beauty-products.component.scss']
})
export class BeautyProductsComponent {
  title = 'Beauty Products'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'Sephora', img: './assets/images/shops/sephora.jpg' },
      { name: 'Asos', img: './assets/images/shops/asos.jpg' }
    ]
  }
}
