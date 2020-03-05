import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "../data.service";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { MovieDetailModule } from "../movie-detail/movie-detail.module";

@NgModule({
  declarations: [AppComponent, routingComponents, MovieDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MovieDetailModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class PopularMoviesListModule {}
