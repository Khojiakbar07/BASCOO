import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent {

  array= [
    "../../../../assets/images/carusel/banner1.jpg",
    "../../../../assets/images/carusel/cargo3.jpg",
    "../../../../assets/images/carusel/cargo2.jpg",
    "../../../../assets/images/carusel/banner8.webp",
    "../../../../assets/images/carusel/banner9.webp",
  ]
}
