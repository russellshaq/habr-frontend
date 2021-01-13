import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input() size: string;
  @Input() type = '';
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
