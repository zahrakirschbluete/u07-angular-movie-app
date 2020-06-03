import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { DataService } from "../data.service";
import { of } from "rxjs";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.scss"],
})
export class FavoritesListComponent implements OnInit {
  movies$: Movie[];
  results = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("test");

    // get the favourites[] from localStorage
    // if (localStorage.getItem("favorites") === null) {
    //   this.favouriteMovies = [];
    // } else {
    let favz = (this.movies$ = JSON.parse(localStorage.getItem("favorites")));
    console.log(favz);
    for (let i = 0; i < favz.length; i++) {
      this.dataService.getMovieDetails(favz[i]).subscribe((info) => {
        this.results.push(info);
        console.log(info);
      });
    }

    // this.favouriteMovies.forEach(
    //   movie => {
    //     // const movie = this.dataService.getMovieDetails(id);
    //     // this.results = this.favouriteMovies.push(movie);
    //     this.dataService.getMovieDetails(movie.id);
  }
  // .subscribe(movie => this.favouriteMovies.push(movie))
  toggleFavoriteBtn(id: number) {
    this.dataService.toggleFavoriteBtn(id);
    this.results = this.results.filter((movie) => movie.id != id);
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
