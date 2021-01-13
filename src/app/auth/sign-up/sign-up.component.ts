import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FieldsMatchValidator} from '../fields-match-validator';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20),
      Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)]),
    rePassword: new FormControl('', [Validators.required])
  }, {validators: FieldsMatchValidator.match('password', 'rePassword')});

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.signupForm.invalid) return;
    this.authService.signup(this.signupForm.value).subscribe({
      next: () => this.router.navigateByUrl('/main/posts'),
      error: (e) => {
        if (e.status) {
          this.signupForm.setErrors({commonError: true});
        } else {
          this.signupForm.setErrors({networkError: true});
        }
      }
    });
  }
}
