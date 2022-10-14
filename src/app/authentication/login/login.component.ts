import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginForm.invalid) {
      // TODO: Add alert
      return;
    }

    this.authService.login(this.loginForm.getRawValue());
  }
}
