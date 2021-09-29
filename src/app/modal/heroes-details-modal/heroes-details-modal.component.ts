import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/interfaces/IHero';

@Component({
  selector: 'app-heroes-details-modal',
  templateUrl: './heroes-details-modal.component.html',
  styleUrls: ['./heroes-details-modal.component.css']
})
export class HeroesDetailsModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Hero) {}

  ngOnInit(): void {}

}
