import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-popular-stores',
  templateUrl: './popular-stores.component.html',
  styleUrls: ['./popular-stores.component.scss']
})
export class PopularStoresComponent {
  title = 'Popular Stores'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'Amazon', img: './assets/images/shops/amazon.png' },
      { name: 'eBay', img: './assets/images/shops/ebay.png' }
    ]
  }
}
