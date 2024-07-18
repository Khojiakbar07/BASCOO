import { Component } from '@angular/core';

@Component({
  selector: 'app-children-products',
  templateUrl: './children-products.component.html',
  styleUrls: ['./children-products.component.scss']
})
export class ChildrenProductsComponent {
  title = 'Children Products'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'Carters', img: './assets/images/shops/carters.jpg' },
    ]
  }

}
