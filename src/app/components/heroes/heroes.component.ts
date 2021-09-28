import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/services/Heroes.services';
import { MatDialog } from '@angular/material/dialog';
import { HeroesDetailsModalComponent } from 'src/app/modal/heroes-details-modal/heroes-details-modal.component';
import { Hero } from 'src/interfaces/IHero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private dialogRef: MatDialog) {}

  heroes = HEROES;

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogRef.open(HeroesDetailsModalComponent, {
      data: {
        name: '',


      }
    });

  }
}
