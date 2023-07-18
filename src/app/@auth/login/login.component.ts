import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  // loginUser!: User | undefined;
  usernameErrorMessage = '';
  passwordErrorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitForm() {
    if (this.loginForm.valid) {
      console.log('Valid form submitted');
      const valueSubmitted = this.loginForm.value;

      // Authenticate
      this.authService.loginCheck(valueSubmitted.username).subscribe((data) => {
        console.log(data);
        // this.loginUser = data;

        if (data) {
          this.passwordErrorMessage = '';
          this.usernameErrorMessage = '';

          if (data.password === valueSubmitted.password) {
            console.log('Password matches');
            this.authService.login();
            this.router.navigate(['app', 'dashboard']);
          } else {
            this.passwordErrorMessage = 'Password is incorrect';
            console.log('Password Incorrect');
            this.authService.logout();
          }
        } else {
          this.usernameErrorMessage = 'User does not exist';
          this.authService.logout();
          console.log('New User');
        }
      });
    }
  }

  onButtonClick() {
    this.authService.login();
    this.router.navigate(['app']);
  }

  showDescriptionErrors(control: string) {
    const descriptionForm = this.loginForm.get(control);
    if (
      descriptionForm?.dirty ||
      (descriptionForm?.touched && descriptionForm.invalid)
    ) {
      if (descriptionForm.errors && descriptionForm.errors['required']) {
        return ` ${control} is required`;
      } else if (descriptionForm.errors && descriptionForm.errors['email']) {
        return 'Not a Valid Email';
      }
    }
    return '';
  }
}
