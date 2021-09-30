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

  hero: [];
  heroes: Hero[] = [];

  constructor(
    private dialog: MatDialog,
    private heroesService: HeroesService,
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  openDialog(id: string, name: string, description: string, image:string): void {
    this.dialog.open(HeroesDetailsModalComponent, {
      width: '700px',
      height: '500px',
      maxHeight: '600px',
      data: {
        id: id,
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
