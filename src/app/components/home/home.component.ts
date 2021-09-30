import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/models/User.models';
import { UserService } from 'src/services/Users.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  isConnected: boolean = false;
  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users:User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
    this.userIsConnected();
    console.log(this.isConnected)
  }

  userIsConnected() {
    this.users.length ? this.isConnected = true : this.isConnected = false;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
