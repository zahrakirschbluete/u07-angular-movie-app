import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { map, switchMap, tap } from "rxjs/operators";
import { Subject, BehaviorSubject, Subscription } from "rxjs";
import { find } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-upcoming-movies-list",
  templateUrl: "./upcoming-movies-list.component.html",
  styleUrls: ["./upcoming-movies-list.component.scss"],
})
export class UpcomingMoviesListComponent implements OnInit {
  @ViewChild("addFavorite") addFavorite: ElementRef;
  movies$: Movie[];
  movieSub$: Subscription;
  statusAdded: boolean = false;
  favoritesArray = [];

  //an observeable which you can subscribe to
  rating = new BehaviorSubject<string>("");
  constructor(public dataService: DataService, route: ActivatedRoute) {}

  ngOnInit() {
    this.rating
      .pipe(switchMap((rating) => this.dataService.getUpcomingMovies(rating)))
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
