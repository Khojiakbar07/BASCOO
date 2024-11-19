import { Component } from '@angular/core';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  customOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    items: 6,
    responsive: {
      50: { items: 3 },
      400: { items: 2 },
      740: { items: 3 },
      800: { items: 4 },
      830: { items: 5 },
      850: { items: 6 },
    },
  };

  cards = [
    {
      id: 1,
      image: '../../../../assets/images/carausel-shops/Mudofa_vazirligi1.png'
    },
    {
      id: 2,
      image: '../../../../assets/images/carausel-shops/Ichki-ishlar.png'
    },
    {
      id: 3,
      image: '../../../../assets/images/carausel-shops/milliy-gvardiya.png'
    },
    {
      id: 4,
      image: '../../../../assets/images/carausel-shops/Uztelecom.png'
    },
    {
      id: 5,
      image: '../../../../assets/images/carausel-shops/TDIU.png'
    },
    {
      id: 6,
      image: '../../../../assets/images/carausel-shops/USSO1.png'
    },
    {
      id: 7,
      image: '../../../../assets/images/carausel-shops/Kongress-Service.png'
    },
    {
      id: 8,
      image: '../../../../assets/images/carausel-shops/ldguz.png'
    },
  ];
}
