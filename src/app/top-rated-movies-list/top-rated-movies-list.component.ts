import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { map, switchMap, tap } from "rxjs/operators";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-top-rated-movies-list",
  templateUrl: "./top-rated-movies-list.component.html",
  styleUrls: ["./top-rated-movies-list.component.scss"],
})
export class TopRatedMoviesListComponent implements OnInit {
  movies$: Movie[];
  //an observeable which you can subscribe to
  rating = new BehaviorSubject<string>("");
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.rating
      .pipe(switchMap((rating) => this.dataService.getTopRatedMovies(rating)))
      .subscribe((data) => {
        this.dataService.movies$ = data["results"];
        const favoritesArray =
          JSON.parse(localStorage.getItem("favorites")) || [];
        this.dataService.movies$.forEach((movie) => {
          movie.favourite = favoritesArray.includes(movie.id);
        });
      });
  }

  onSelectChange(rating: string) {
    this.rating.next(rating);
  }
  toggleFavoriteBtn(id: number) {
    this.dataService.toggleFavoriteBtn(id);
  }
}
