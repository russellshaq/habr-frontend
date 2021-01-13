import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type = 'text';
  @Input() control;
  @Input() required = true;
  constructor() { }

  ngOnInit(): void {
  }

  showErrors(): boolean {
    return this.control.touched && this.control.invalid;
  }

}
