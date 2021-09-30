import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/Users.services';
import { User } from '../../models/User.models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['email'],
      formValue['password']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['']);
  }
}
