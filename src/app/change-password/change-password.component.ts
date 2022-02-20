import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form : FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword : ['', Validators.required],
      newPassword : ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
}
