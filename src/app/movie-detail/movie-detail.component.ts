import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit {
  movie$: Movie[];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}
  /**
   * Subscribes to route changes
   * If route params changes, get the movie id from URL
   * and get the info about the movie from TMDB API
   */
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        map(params => +params["id"]),
        switchMap(id => this.dataService.getMovieDetails(id))
      )
      .subscribe(info => {
        this.movie$ = info;
      });
  }
}
