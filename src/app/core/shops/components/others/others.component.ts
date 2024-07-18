import { Component } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent {
  title = 'Others'
  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'JetPens', img: './assets/images/shops/jetPens.jpg' },
      { name: 'abeBooks', img: './assets/images/shops/abeBooks.jpg' },
    ]
  }

}
