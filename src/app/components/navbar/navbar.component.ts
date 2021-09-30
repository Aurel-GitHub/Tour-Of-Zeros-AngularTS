import { Component } from '@angular/core';
import { User } from 'src/models/User.models';
import { MessageService } from 'src/services/Messages.services';
import { UserService } from 'src/services/Users.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  userConnected: User[];
  title : string = 'Tour Of Zeros';

  constructor(
    private userService: UserService,
    private messageService: MessageService,
  ) {
    this.userConnected = this.userService.getUser()
  }

  logout(): void {
    setTimeout(()=> {
      this.userConnected.length = 0;
      this.messageService.add('Vous êtes déconnecté !');
    }, 1000);
  }
}
