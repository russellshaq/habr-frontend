import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {FeedComponent} from './feed/feed.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {DeletePostComponent} from './post/delete-post/delete-post.component';
import {AddPostComponent} from './post/add-post/add-post.component';

const routes: Routes = [
  {path: 'posts', component: FeedComponent, pathMatch: 'full'},
  {path: 'posts/add', component: AddPostComponent, pathMatch: 'full'},
  {path: `posts/:id/delete`, component: DeletePostComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'user-details/:id', component: UserDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
