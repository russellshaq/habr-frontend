import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SharedModule} from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { StatsComponent } from './stats/stats.component';
import { FeedComponent } from './feed/feed.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthorPanelComponent } from './author-panel/author-panel.component';
import { ProfileComponent } from './user-details/profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BookmarksComponent } from './user-details/bookmarks/bookmarks.component';
import { UserPostsComponent } from './user-details/user-posts/user-posts.component';
import { DeletePostComponent } from './post/delete-post/delete-post.component';
import { InfoComponent } from './user-details/info/info.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import {EditorModule} from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [SidebarComponent, NavbarComponent, PostComponent, CommentsComponent, StatsComponent, FeedComponent, AuthorPanelComponent, ProfileComponent, UserDetailsComponent, BookmarksComponent, UserPostsComponent, DeletePostComponent, InfoComponent, EditPostComponent, AddPostComponent],
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class MainModule {
}
