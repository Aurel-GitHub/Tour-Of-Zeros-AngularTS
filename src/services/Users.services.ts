import { Subject } from 'rxjs';
import { Injectable } from '@angular/core'; // at top
import { User } from '../models/User.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  getUser() {
    return this.users;
  }
}
