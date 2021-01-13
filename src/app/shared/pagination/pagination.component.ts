import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pages: number;
  selectedPage = 0;
  @Output() selectPage = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(pageNum): void {
    this.selectedPage = pageNum;
    this.selectPage.emit(pageNum);
  }

}
