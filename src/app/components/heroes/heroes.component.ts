import { Component, OnInit } from '@angular/core';
import { heroesData } from 'src/data/Heroes.data';
import { MatDialog } from '@angular/material/dialog';
import { HeroesDetailsModalComponent } from 'src/app/modal/heroes-details-modal/heroes-details-modal.component';
import { HeroesService } from 'src/services/Heroes.services';
import { Hero } from 'src/interfaces/IHero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private heroesService: HeroesService) {
  }

  hero: any = [];
  heroes = heroesData;

  ngOnInit(): void {
  }

  getId(idValue: string): string {
    return idValue;
  }


  openDialog(idValue): void {
    this.dialogRef.open(HeroesDetailsModalComponent);
    let id = this.getId(idValue);
    this.hero = this.heroesService.getHeroeById(id)
    console.log("TEST FUNCTION ", this.hero);
  }

}
