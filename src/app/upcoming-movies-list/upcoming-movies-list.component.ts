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
  styleUrls: ["./upcoming-movies-list.component.scss"]
})
export class UpcomingMoviesListComponent implements OnInit {
  @ViewChild("addFavorite") addFavorite: ElementRef;
  movies$: Movie[];
  movieSub$: Subscription;
  statusAdded: boolean = false;
  favoritesArray = [];

  //an observeable which you can subscribe to
  rating = new BehaviorSubject<string>("");
  constructor(private dataService: DataService, route: ActivatedRoute) {}

  ngOnInit() {
    this.rating
      .pipe(switchMap(rating => this.dataService.getUpcomingMovies(rating)))
      .subscribe(data => {
        this.movies$ = data["results"];
      });
  }

  onSelectChange(rating: string) {
    this.rating.next(rating);
  }

  toggleFavoriteBtn(id: number) {
    let clickedMovie = this.movies$.find(movie => movie.id === id);
    if (clickedMovie.favourite) {
      // unfavourite
      this.favoritesArray = this.favoritesArray.filter(fave => fave !== id);
    } else {
      this.favoritesArray.push(id);
    }
    clickedMovie.favourite = !clickedMovie.favourite;
    localStorage.setItem("favorites", JSON.stringify(this.favoritesArray));
  }
}
