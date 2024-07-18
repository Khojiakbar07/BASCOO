import { Component } from '@angular/core';
import { DropDownAnimation } from './animation';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss'],
  animations: [DropDownAnimation]
})
export class HelpsComponent {
  isOpen1 = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;
  isOpen5 = false;
  isOpen6 = false;
  isOpen7 = false;
  isOpen8 = false;
  isOpen9 = false;
  isOpen10 = false;
  isOpen11 = false;

  toggleDropdown(dropdownNumber: number): void {
    if (dropdownNumber === 1) {
      this.isOpen1 = true;
    } else if (dropdownNumber === 2) {
      this.isOpen2 = true;
    } else if (dropdownNumber === 3) {
      this.isOpen5 = true;
    } else if (dropdownNumber === 4) {
      this.isOpen7 = true;
    } else if (dropdownNumber === 5) {
      this.isOpen8 = true;
    }

    this.scrollToDropdown(dropdownNumber);
  }

  scrollToDropdown(dropdownNumber: number): void {
    const dropdownElement = document.getElementById(`dropdown${dropdownNumber}`);
    if (dropdownElement) {
      dropdownElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
