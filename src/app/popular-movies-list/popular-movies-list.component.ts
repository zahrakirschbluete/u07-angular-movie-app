import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { map, switchMap, tap } from "rxjs/operators";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-popular-movies-list",
  templateUrl: "./popular-movies-list.component.html",
  styleUrls: ["./popular-movies-list.component.scss"],
})
export class PopularMoviesListComponent implements OnInit {
  id = new BehaviorSubject<string>("");
  statusAdded: boolean = false;

  //an observeable which you can subscribe to
  rating = new BehaviorSubject<string>("");
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.rating
      .pipe(switchMap((rating) => this.dataService.getMovies(rating)))
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

  // onClick(id: number) {
  //   this.dataService.toggleFavoriteBtn(id);
  // }
  toggleFavoriteBtn(id: number) {
    this.dataService.toggleFavoriteBtn(id);
    // // this.favoritesArray = JSON.parse(localStorage.getItem("favorites"));
    // let clickedMovie = this.movies$.find((movie) => movie.id === id);
    // if (clickedMovie.favourite) {
    //   // unfavourite

    //   this.favoritesArray = this.favoritesArray.filter((fave) => fave !== id);
    // } else {
    //   this.favoritesArray.push(id);
    // }

    // clickedMovie.favourite = !clickedMovie.favourite;
    // localStorage.setItem("favorites", JSON.stringify(this.favoritesArray));
  }
}
