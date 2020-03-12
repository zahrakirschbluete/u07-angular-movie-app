import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { of } from "rxjs";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.scss"]
})
export class FavoritesListComponent implements OnInit {
  favouriteMovies: Movie[];
  results = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // get the favourites[] from localStorage
    if (localStorage.getItem("favorites") === null) {
      this.favouriteMovies = [];
    } else {
      this.favouriteMovies = JSON.parse(localStorage.getItem("favorites"));
    }
    this.favouriteMovies.forEach(
      movie => {
        // const movie = this.dataService.getMovieDetails(id);
        // this.results = this.favouriteMovies.push(movie);
        this.dataService.getMovieDetails(movie.id);
      }
      // .subscribe(movie => this.favouriteMovies.push(movie))
    );
  }
}
