import {Component} from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactComponent {
  selectedPage: string = 'uzbekistan';

  constructor() {

  }
}
