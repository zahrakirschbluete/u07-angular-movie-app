import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./data.service";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchComponent } from "./search/search.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { HomeComponent } from "./home/home.component";
import { UpcomingMoviesListComponent } from "./upcoming-movies-list/upcoming-movies-list.component";
import { TopRatedMoviesListComponent } from "./top-rated-movies-list/top-rated-movies-list.component";
import { FooterComponent } from "./footer/footer.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MovieDetailComponent,
    SearchComponent,
    PageNotFoundComponent,
    PersonDetailComponent,
    HomeComponent,
    UpcomingMoviesListComponent,
    TopRatedMoviesListComponent,
    FooterComponent,
    FavoritesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
