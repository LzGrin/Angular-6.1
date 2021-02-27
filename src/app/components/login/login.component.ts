import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit  {
  @Output() public onCloseLogin: EventEmitter<void> = new EventEmitter<void>();
  public login = {
    firstName: '',
    lastName: '',
    email: ''
  };
  public loginForm: FormGroup = new FormGroup({});
  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      firstName: new FormControl(this.login.firstName, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(this.login.lastName, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(this.login.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    });
   }
  get firstName() {
    return this.loginForm.get('firstName');
  }
  get lastName() {
    return this.loginForm.get('lastName');
  }
  get email() {
    return this.loginForm.get('emailName');
  }
}
