import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UpdateHeroComponent } from './components/heroes/update-hero/update-hero.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'udapte-11hero/:id', component: UpdateHeroComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
