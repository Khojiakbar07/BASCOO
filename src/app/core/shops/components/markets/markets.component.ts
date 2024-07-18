import { Component } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent {
  title = 'Markets'

  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'Amazon', img: './assets/images/shops/amazon.png' },
      { name: 'eBay', img: './assets/images/shops/ebay.png' },
      { name: 'Walmart', img: './assets/images/shops/walmart.png' },
      { name: 'B&H Photo Video', img: './assets/images/shops/b_h.png' },
      { name: 'Nordstorm Rack', img: './assets/images/shops/rack.png' },
      { name: 'Nordstorm', img: './assets/images/shops/nordstrom.jpg' },
    ]
  }
}
