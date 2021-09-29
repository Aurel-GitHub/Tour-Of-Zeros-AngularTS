import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeroesDetailsModalComponent } from 'src/app/modal/heroes-details-modal/heroes-details-modal.component';
import { Hero } from 'src/interfaces/IHero';
import { HeroesService } from 'src/services/Heroes.services';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private dialog: MatDialog, private heroesService: HeroesService) {}

  hero: [];
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes()
  }

  openDialog(name: string, description: string, image:string): void {
    this.dialog.open(HeroesDetailsModalComponent, {
      width: '600px',
      height: '500px',
      maxHeight: '600px',
      data: {
        name: name,
        description: description,
        image: image,
      }
    });
  }

  getHeroes(): void {
    this.heroes = this.heroesService.getAll()
  }
}
