import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { map, switchMap, tap } from "rxjs/operators";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-popular-movies-list",
  templateUrl: "./popular-movies-list.component.html",
  styleUrls: ["./popular-movies-list.component.scss"]
})
export class PopularMoviesListComponent implements OnInit {
  movies$: Movie[];
  //an observeable which you can subscribe to
  rating = new BehaviorSubject<string>("");
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.rating
      .pipe(switchMap(rating => this.dataService.getMovies(rating)))
      .subscribe(data => {
        this.movies$ = data["results"];
      });

    // return this.dataService.getMovies(this.rating).subscribe(data => {
    //   this.movies$ = data["results"];
    //   console.log(data);
    // });
  }

  onSelectChange(rating: string) {
    this.rating.next(rating);
  }
}
