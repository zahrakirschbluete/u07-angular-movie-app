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

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MovieDetailComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
