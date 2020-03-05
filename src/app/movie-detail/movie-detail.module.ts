import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "../app-routing.module";

import { HttpClientModule } from "@angular/common/http";
import { DataService } from "../data.service";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";

@NgModule({
  declarations: [routingComponents, MovieDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [DataService],
  bootstrap: []
})
export class MovieDetailModule {}
