import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CelebrityListComponent } from './celebrity-list/celebrity-list.component';
import { CelebrityRollComponent } from './celebrity-roll/celebrity-roll.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clist', component: CelebrityListComponent },
  { path: 'croll', component: CelebrityRollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
