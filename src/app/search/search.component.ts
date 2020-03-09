import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { Person } from "../person.model";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  movies$: Movie[];
  persons$: Person[];
  query: Movie[];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        map(params => params["query"]),
        switchMap(data => this.dataService.getSearchResults(data))
      )
      .subscribe(info => {
        this.movies$ = info;
      });

    this.activatedRoute.params
      .pipe(
        map(params => params["query"]),
        switchMap(data => this.dataService.getPersonSearchResults(data))
      )
      .subscribe(info => {
        this.persons$ = info;
      });
  }
}
