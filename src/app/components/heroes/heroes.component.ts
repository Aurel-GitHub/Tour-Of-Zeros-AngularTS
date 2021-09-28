import { Component, OnDestroy, OnInit } from '@angular/core';
import { heroesData } from 'src/data/Heroes.data';
import { MatDialog } from '@angular/material/dialog';
import { HeroesDetailsModalComponent } from 'src/app/modal/heroes-details-modal/heroes-details-modal.component';
import { HeroesService } from 'src/services/Heroes.services';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(
    private dialogRef: MatDialog,
    private heroesService: HeroesService
  ) {}

  hero: [];
  heroes = heroesData;
  subscription: Subscription;

  ngOnInit(): void {
  }

  getId(idValue: string) {
    return idValue;
  }

  openDialog(idValue): any {
    this.dialogRef.open(HeroesDetailsModalComponent);
    let id = this.getId(idValue);
    this.hero = this.heroesService.getHeroeById(id);
    console.log('dsfsdfd', this.hero);
  }

}
