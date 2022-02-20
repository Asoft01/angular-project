import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    // username: new FormControl('', Validators.required),
    // username: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   UsernameValidators.cannotContainSpace
    // ]),

    //////////////////////////////////////////////////////////////////////

    // username : new FormControl('', 
    // Validators.required, 
    // UsernameValidators.shouldBeUnique),
    // password: new FormControl('', Validators.required)
    /////////////////////////////////////////////////////////////////////

    account : new FormGroup({
      username : new FormControl(''),
      password: new FormControl('')
    })
  });

  // get username(){
  //   return this.form.get('username');
  // }

  get username(){
    return this.form.get('account.username');
  };

  login(){
      this.form.setErrors({
        invalidLogin : true
      });
      // this.username.setErrors
  }
}
