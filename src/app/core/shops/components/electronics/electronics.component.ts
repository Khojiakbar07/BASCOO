import { Component } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent {
  title = 'Electronics'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'B&H Photo Video', img: './assets/images/shops/b_h.png' },
      { name: 'FullCompas', img: './assets/images/shops/full-compass.jpg' },
      { name: 'Apple', img: './assets/images/shops/apple.png' },
    ]
  }

}
