import { Injectable } from "@angular/core";
import { Hero } from "src/interfaces/IHero";
import { heroesData } from "src/data/Heroes.data";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor() {}

  getHeroeById(id: string): any {
    let arrayResult = [];
    heroesData;
    heroesData.map((item) => {
      item.id == id ? arrayResult.push(item) : '';
    })
    return arrayResult;
  }
  getAll(): Hero[] {
    return heroesData;
  }

}
