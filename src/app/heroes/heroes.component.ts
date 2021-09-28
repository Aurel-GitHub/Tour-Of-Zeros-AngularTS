import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/IHero';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hero: Hero = {
    id: uuidv4(),
    name: 'Onomatopoeia',
    description: "Voilà un personnage qui a l'avantage d'annoncer la couleur rien qu'en évoquant son nom. D’abord introduit pour la première fois en 2002 dans Green Arrow #12, le personnage ensuite réapparu en ennemi de Batman. Onomatopoeia est un fin tacticien, il a notamment organisé l’évasion du Joker et il est aussi une athlète et un artiste martial respectable. Mais il a la fâcheuse manie de s'exprimer 99,9% du temps en onomatopées...",
    image: '../../assets/img/onomatopoeia.jpg',
  }
}
