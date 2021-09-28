import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HEROES } from '../../../services/Heroes.services';


@Component({
  selector: 'app-heroes-details-modal',
  templateUrl: './heroes-details-modal.component.html',
  styleUrls: ['./heroes-details-modal.component.css']
})
export class HeroesDetailsModalComponent implements OnInit {

  @Input() idHero: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}


  ngOnInit(): void {
  }

}
