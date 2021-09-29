import { Subject } from 'rxjs';
import { User } from '../models/User.models';
import { Injectable } from '@angular/core'; // at top


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
}
