import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../model/User';
import {AuthService} from '../../../auth/auth.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl: string;
  file: File;
  @Input() user: User;
  @Output() updateUser = new EventEmitter();
  saved = false;
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])});

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.imageUrl = this.user.imageUrl;
    this.profileForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
    });
  }

  onFileChange(event): void {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }

  // onSubmit(): void {
  //   if (this.profileForm.invalid) {
  //     return;
  //   }
  //   this.userService.updateProfile(this.profileForm.value, this.user.id).subscribe({
  //     next: (user) => {
  //       this.saved = true;
  //       this.updateUser.emit(user);
  //     }
  //   });
  // }


  onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('id', this.user.id.toString());
    formData.append('firstName', this.profileForm.get('firstName').value);
    formData.append('lastName', this.profileForm.get('lastName').value);
    formData.append('file', this.file);
    this.userService.updateDataProfile(formData, this.user.id).subscribe({
      next: (user) => {
        this.saved = true;
        this.updateUser.emit(user);
      }
    });
  }
}
