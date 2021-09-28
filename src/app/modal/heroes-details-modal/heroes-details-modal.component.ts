import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { heroesData } from 'src/data/Heroes.data';


@Component({
  selector: 'app-heroes-details-modal',
  templateUrl: './heroes-details-modal.component.html',
  styleUrls: ['./heroes-details-modal.component.css']
})
export class HeroesDetailsModalComponent implements OnInit {

  @Input() heroData: [];

  constructor() {}

  ngOnInit(): void {
  }

}
