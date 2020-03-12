import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Movie } from "./movie.model";
import { DataService } from "./data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("dropdown") dropdown: ElementRef;
  @ViewChild("dropdownMenu") dropdownMenu: ElementRef;

  movies$: Movie[];
  query: string;
  favorites = [];
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    return this.dataService.getMovies().subscribe(data => {
      this.movies$ = data["results"];
      console.log(data);
    });
  }
  // toggleFavorites() {
  //   return this.dataService.addMovie().subscribe(data => {
  //     this.favorites = data;
  //   });
  // }
  toggleDropDown() {
    this.dropdown.nativeElement.classList.toggle("show");
    this.dropdownMenu.nativeElement.classList.toggle("show");
  }

  search() {
    return this.dataService.getSearchResults(this.query).subscribe(data => {
      this.router.navigateByUrl(`search/${this.query}`);
      console.log(data);
      this.query = "";
    });
  }
}
