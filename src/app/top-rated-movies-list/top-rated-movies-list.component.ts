import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { map, switchMap, tap } from "rxjs/operators";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-top-rated-movies-list",
  templateUrl: "./top-rated-movies-list.component.html",
  styleUrls: ["./top-rated-movies-list.component.scss"]
})
export class TopRatedMoviesListComponent implements OnInit {
  movies$: Movie[];
  //an observeable which you can subscribe to
  rating = new BehaviorSubject<string>("");
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.rating
      .pipe(switchMap(rating => this.dataService.getTopRatedMovies(rating)))
      .subscribe(data => {
        this.movies$ = data["results"];
      });
  }

  onSelectChange(rating: string) {
    this.rating.next(rating);
  }
}
