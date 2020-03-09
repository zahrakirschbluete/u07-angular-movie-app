import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PopularMoviesListComponent } from "./popular-movies-list/popular-movies-list.component";

import { AppComponent } from "./app.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path: "popular-movies", component: PopularMoviesListComponent },
  { path: `movie/:id`, component: MovieDetailComponent },
  { path: `search/:query`, component: SearchComponent },
  { path: "", redirectTo: "popular-movies", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  PopularMoviesListComponent,
  MovieDetailComponent
];
