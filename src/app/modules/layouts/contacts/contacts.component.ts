import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  selectedPage: string = 'uzbekistan';
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  showGermany() {
    this.selectedPage = 'germany';
  }

  showPoland() {
    this.selectedPage = 'poland';
  }

  showUzbekistan() {
    this.selectedPage = 'uzbekistan';
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });


  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        subject: ['', Validators.required],
        message: ['', [Validators.required]],
      },
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.form.reset();
    this.submitted = false;
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
