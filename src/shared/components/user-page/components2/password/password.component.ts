import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './validation';
declare const intlTelInput: any;

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  submitted = false;
  showPassword: boolean = false;
  showRepeatPassword: boolean = false;
  showCurrentPassword: boolean = false;

  form: FormGroup = new FormGroup({
    currentPassword: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const mobileCodeInput = document.getElementById('mobile_code') as HTMLInputElement;
    if (mobileCodeInput) {
      const iti = intlTelInput(mobileCodeInput, {
        initialCountry: 'uz',
        separateDialCode: true,
      });
      mobileCodeInput.addEventListener('input', () => {
        mobileCodeInput.setCustomValidity('');
      });
    }

    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        confirmPassword: ['', Validators.required],
        currentPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPasswordVisibility() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  toggleshowCurrentPassword() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }
}
