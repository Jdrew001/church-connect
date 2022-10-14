import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.sass']
})
export class AcceptInviteComponent implements OnInit, AfterViewInit {

  get passwordsMatch() {
    const password = this.acceptInviteForm.get('password')?.value;
    const confirmPassword = this.acceptInviteForm.get('confirmPassword')?.value;

    return password == confirmPassword;
  }

  acceptInviteForm: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const url = window.location.href;
    const token = url?.split('#')[1]?.split('=')[1]?.split('&')[0];
    this.tokenService.setToken(token);
  }

  submit() {
    if (this.acceptInviteForm.invalid) {
      //TODO: inavlid form; show error
      return;
    }

    if (!this.passwordsMatch) {
      //TODO: passwords do not match; show error
      return;
    }

    this.userService.resetPassword(this.acceptInviteForm.get('password')?.value);
  }
}
