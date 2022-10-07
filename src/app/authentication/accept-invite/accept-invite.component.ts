import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.sass']
})
export class AcceptInviteComponent implements OnInit {

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
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
