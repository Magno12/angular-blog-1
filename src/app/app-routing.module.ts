import { DetailAnimeComponent } from './pages/detail-anime/detail-anime.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'content/:id',
    component: ContentComponent
  },
  {
    path: 'anime',
    component: AnimeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
