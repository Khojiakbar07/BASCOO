import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Renderer2, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss']
})
export class MyAddressesComponent {
  isModalOpen: boolean = false;
  selectedUnit: string = 'kg';
  submitted = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    acceptTerms: new FormControl(false),
    passportNum: new FormControl(''),
    passportData: new FormControl(''),
    birthDate: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,
    private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        birthDate: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        acceptTerms: [false, [Validators.required, Validators.requiredTrue]],
        city: ['', [Validators.required, Validators.minLength(9)]],
        home: ['', [Validators.required, Validators.minLength(6)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
        passportNum: ['', Validators.required, Validators.minLength(9)],
        passportData: ['', Validators.required, Validators.minLength(14)],
      }
    );
  }

  private disableScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    this.renderer.setStyle(document.body, 'position', 'fixed');
    this.renderer.setStyle(document.body, 'width', `calc(100% - ${scrollbarWidth}px)`);
  }

  private enableScroll() {
    this.renderer.removeStyle(document.body, 'top');
    this.renderer.removeStyle(document.body, 'position');
    this.renderer.removeStyle(document.body, 'width');
  }

  openModal() {
    this.isModalOpen = true;
    this.disableScroll();
  }

  closeModal() {
    this.isModalOpen = false;
    this.enableScroll();
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
}
