import {User} from './User';
import {Comment} from './Comment';

export class Post {
  id: number;
  title: string;
  body: string;
  published: boolean;
  voteCount: number;
  bookmarkCount: number;
  commentCount: number;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}
