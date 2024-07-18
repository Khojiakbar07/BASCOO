import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent {

  array= [
    "../../../../assets/images/carusel/DSC.jpg",
    "../../../../assets/images/carusel/LSBB.jpg",
    "../../../../assets/images/carusel/LED-Display.jpg",
    "../../../../assets/images/carusel/LED-Display1.jpg",
    "../../../../assets/images/carusel/LED-Display2.webp",
    "../../../../assets/images/carusel/banner1.jpg",
  ]
}
