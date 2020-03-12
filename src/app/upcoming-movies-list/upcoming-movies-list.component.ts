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
    console.log("id", id);
    let clickedMovie = this.movies$.find(movie => movie.id === id);
    console.log("clickedMovie", clickedMovie);
    if (clickedMovie.favourite) {
      // unfavourite
      this.favoritesArray = this.favoritesArray.filter(fave => fave !== id);
    } else {
      this.favoritesArray.push(id);
    }
    clickedMovie.favourite = !clickedMovie.favourite;
    console.log("favourites", this.favoritesArray);
    localStorage.setItem("favorites", JSON.stringify(this.favoritesArray));
    //test 1
    // this.movies$.forEach(this.movies$["id"], () => {
    //   this.addFavorite.nativeElement.src =
    //     "../../assets/addFavorites_statusClicked=true.png";
    // });
    //test 2
    // this.id = +this.route.snapshot.paramMap.get("id");
    // this.movieSub$ = this.dataService.getMovies(this.id).subscribe(info => {
    //   this.movies$ = info;
    //   console.log(this.movies$);
    // });

    // if (this.statusAdded == false) {
    //   // this.statusAdded = true;
    //   let clickedMovie = this.movies$.find(movie => movie.id === id);
    //   clickedMovie.favourite = !clickedMovie.favourite;
    //   // this.addFavorite.nativeElement.src =
    //   //   "../../assets/addFavorites_statusClicked=true.png";
    //   console.log("clickedMovie", clickedMovie);
    //   // console.log("statusAdded", this.statusAdded);

    //   this.favoritesArray.push(id);
    //   console.log("favourites", this.favoritesArray);
    // } else {
    //   this.statusAdded = false;
    //   console.log("status", this.statusAdded);
    //   this.favoritesArray.push("false");
    //   console.log(this.favoritesArray);
    //   this.addFavorite.nativeElement.src =
    //     "../../assets/addFavorites_statusClicked=false.png";
    // }
  }
}
