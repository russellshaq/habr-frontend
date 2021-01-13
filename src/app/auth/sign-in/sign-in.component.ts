import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20),
      Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)]),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signIn(this.signinForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/posts');
      },
      error: (e) => {
        this.signinForm.setErrors({commonError: true});
      }
    });
  }
}
