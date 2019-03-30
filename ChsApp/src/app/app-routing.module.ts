import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CelebrityListComponent } from './celebrity-list/celebrity-list.component';
import { CelebrityRollComponent } from './celebrity-roll/celebrity-roll.component';
import { CelebrityDetailComponent } from './celebrity-detail/celebrity-detail.component';
import { CelebrityFactorComponent } from './celebrity-factor/celebrity-factor.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: CelebrityDetailComponent },
  { path: 'factor/:id', component: CelebrityFactorComponent },
  { path: 'clist', component: CelebrityListComponent },
  { path: 'croll', component: CelebrityRollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
