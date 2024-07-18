import { Component } from '@angular/core';

@Component({
  selector: 'app-my-shipments',
  templateUrl: './my-shipments.component.html',
  styleUrls: ['./my-shipments.component.scss']
})
export class MyShipmentsComponent {
  modalOpen = false;
  currentStep = 0;
  totalSteps = 5;
  selectedCountry: string | null = null;
  selectedOption: string | null = null;
  orderItems: any[] = [];

  ngOnInit() {
    this.addOrderItem();
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.currentStep = 1;
  }

  openModal() {
    this.modalOpen = true;
    this.currentStep = 0;
  }

  closeModal() {
    this.modalOpen = false;
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  get orderSteps(): number[] {
    return Array(this.totalSteps).fill(0).map((_, index) => index + 1);
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.currentStep = 2;
  }

  addOrderItem() {
    const newItem = {
      itemName: '',
      quantity: null,
      price: null
    };
    this.orderItems.push(newItem);
  }

  deleteOrderItem(index: number) {
    this.orderItems.splice(index, 1);
  }
}
