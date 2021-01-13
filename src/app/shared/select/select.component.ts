import {Component, Input, OnInit} from '@angular/core';
import {Topic} from '../../model/Topic';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() required = true;
  @Input() control;
  @Input() options: Topic[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event): void {
    this.control.setValue(event.target.value);
  }
}
