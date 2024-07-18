import { Component } from '@angular/core';

@Component({
  selector: 'app-department-stores',
  templateUrl: './department-stores.component.html',
  styleUrls: ['./department-stores.component.scss']
})
export class DepartmentStoresComponent {
  title = 'Department Stores'

  data: any[] = []

  ngOnInit() {
    this.data = [
      { name: 'Nordstorm Rack', img: './assets/images/shops/rack.png' },
      { name: 'Nordstorm', img: './assets/images/shops/nordstrom.jpg' },
    ]
  }

}
