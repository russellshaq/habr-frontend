import {UserStats} from './UserStats';

export class User {
  static defaultImage = 'assets/img/steve.jpg';
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  stats: UserStats;
}
