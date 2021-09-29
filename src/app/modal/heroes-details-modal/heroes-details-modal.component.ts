import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/interfaces/IHero';
import { MessageService } from 'src/services/Messages.services';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Hero,
    private messagerieService: MessageService
  ) {}

  ngOnInit(): void {
    this.name = this.data.name;
    this.description = this.data.description;
  }

  handleUpdateValue(): void {
    if (this.updateValue === false) {
      this.updateValue = true;
      this.messagerieService.add('HeroService: '+ this.data.name + ' will be updated later');
    } else if (this.updateValue === true) {
      this.updateValue = false;
    }
  }
}
