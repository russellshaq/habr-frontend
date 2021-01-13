import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticComponent} from './statistic/statistic.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule} from '@angular/router';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [StatisticComponent, InputComponent, HeaderComponent, PaginationComponent, PostListComponent, SelectComponent],
  exports: [
    StatisticComponent,
    InputComponent,
    HeaderComponent,
    PaginationComponent,
    PostListComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
