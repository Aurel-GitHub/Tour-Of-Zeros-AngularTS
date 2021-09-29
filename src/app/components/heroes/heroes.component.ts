import { Component, OnDestroy, OnInit } from '@angular/core';
import { heroesData } from 'src/data/Heroes.data';
import { MatDialog } from '@angular/material/dialog';
import { HeroesDetailsModalComponent } from 'src/app/modal/heroes-details-modal/heroes-details-modal.component';
import { HeroesService } from 'src/services/Heroes.services';
import { Subscription } from 'rxjs';
import { Hero } from 'src/interfaces/IHero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  hero: [];
  heroes = heroesData;
  subscription: Subscription;

  ngOnInit(): void {
  }

  getId(idValue: string) {
    return idValue;
  }

  openDialog(name: string, description: string, image:string): void {
    this.dialog.open(HeroesDetailsModalComponent, {
      width: '330px',
      height: '400px',
      data: {
        name: name,
        description: description,
        image: image,
      }
    });
  }
}
