import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Movie } from "./movie.model";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("dropdown") dropdown: ElementRef;
  @ViewChild("dropdownMenu") dropdownMenu: ElementRef;
  movies$: Movie[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getMovies().subscribe(data => {
      this.movies$ = data["results"];
      console.log(data);
    });
  }

  toggleDropDown() {
    this.dropdown.nativeElement.classList.toggle("show");
    this.dropdownMenu.nativeElement.classList.toggle("show");
  }
}
