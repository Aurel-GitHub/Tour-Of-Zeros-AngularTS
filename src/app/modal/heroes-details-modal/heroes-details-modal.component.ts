import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Hero } from 'src/interfaces/IHero';
import { User } from 'src/models/User.models';
import { HeroesService } from 'src/services/Heroes.services';
import { MessageService } from 'src/services/Messages.services';
import { UserService } from 'src/services/Users.services';

@Component({
  selector: 'app-heroes-details-modal',
  templateUrl: './heroes-details-modal.component.html',
  styleUrls: ['./heroes-details-modal.component.css']
})
export class HeroesDetailsModalComponent implements OnInit {

  updateValue: boolean = false;
  id: string;
  name: string;
  description: string;
  image: string;
  heroSubscription: Subscription;
  userConnected: User[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Hero,
    private messagerieService: MessageService,
    private heroService: HeroesService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
    this.name = this.data.name;
    this.description = this.data.description;
    this.image = this.data.image;
    this.userConnected = this.userService.getUser();
  }

  handleUpdateValue(): void {
    if (this.updateValue === false) {
      this.updateValue = true;
    } else if (this.updateValue === true) {
      this.updateValue = false;
    }
  }

  onSubmit(form: NgForm) {
    const idForm = this.id;
    const nameForm = form.value['name'];
    const descriptionForm = form.value['description'];
    const imageForm = this.image;
    this.heroService.updateHero(idForm, nameForm, descriptionForm, imageForm);
    this.messagerieService.add('HeroService: '+ this.data.name + ' was updated');
    this.updateValue = false;
  }
}
