import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/User';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
