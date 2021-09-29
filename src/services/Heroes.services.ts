import { Injectable } from "@angular/core";
import { Hero } from "src/interfaces/IHero";
import { heroesData } from "src/data/Heroes.data";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class HeroesService {



  heroesSubject = new Subject<any[]>();

  emitObjectSubject() {
    this.heroesSubject.next(heroesData.slice());
  }

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

  updateHero(id: string, name: string, description: string, image: string) {
    const heroObject = {
      id: id,
      name: '',
      description: '',
      image: image,
    };
    heroObject.name = name;
    heroObject.description = description;

    heroesData.map((item) => {
      if (id === item.id) {
        item.name = name;
        item.description = description;
      }
    })
    this.emitObjectSubject();


  }

}
