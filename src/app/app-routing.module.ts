import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: '', component: HomeComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
