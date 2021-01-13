import {User} from './User';

export class Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}
