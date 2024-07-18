import { Component } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {
  currentStep = 1;
  branch!: string;
  orderType!: string;
  declaration!: string;
  sender!: string;
  recipient!: string;

  constructor() { }

  nextStep() {
    this.currentStep++;
  }

  finish() {
    // Process data or any final steps
    console.log('Completed setup');
  }
}
