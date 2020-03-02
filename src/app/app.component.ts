import { Component, OnInit } from "@angular/core";
import { Movie } from "./movie.model";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies$: Movie[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getMovies().subscribe(data => {
      this.movies$ = data["results"];
      console.log(data);
    });
  }
}
