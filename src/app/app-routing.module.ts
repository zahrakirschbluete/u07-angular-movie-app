import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PopularMoviesListComponent } from "./popular-movies-list/popular-movies-list.component";

import { AppComponent } from "./app.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchComponent } from "./search/search.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { HomeComponent } from "./home/home.component";
import { UpcomingMoviesListComponent } from "./upcoming-movies-list/upcoming-movies-list.component";
import { TopRatedMoviesListComponent } from "./top-rated-movies-list/top-rated-movies-list.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";

const routes: Routes = [
  { path: "movie", component: PopularMoviesListComponent },
  { path: "movie/top-rated", component: TopRatedMoviesListComponent },
  { path: "movie/upcoming", component: UpcomingMoviesListComponent },
  { path: `movie/:id`, component: MovieDetailComponent },
  { path: `person/:id`, component: PersonDetailComponent },
  { path: `favorites`, component: FavoritesListComponent },
  { path: `search/:query`, component: SearchComponent },
  { path: `home`, component: HomeComponent },
  { path: "", redirectTo: "movie", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  PopularMoviesListComponent,
  MovieDetailComponent,
];
