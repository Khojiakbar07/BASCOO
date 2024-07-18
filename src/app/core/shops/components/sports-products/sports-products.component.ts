import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-products',
  templateUrl: './sports-products.component.html',
  styleUrls: ['./sports-products.component.scss']
})
export class SportsProductsComponent {
  title = 'Sports Products'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'Nike', img: './assets/images/shops/nike.jpg' },
    ]
  }

}
