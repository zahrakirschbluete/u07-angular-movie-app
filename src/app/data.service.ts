import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { Person } from "./person.model";
import { API_KEY, API_URL } from "./api.config";
import { Favorites } from "./favourites-list.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  movies$: Movie[];
  statusAdded: boolean = false;
  favoritesArray = [];
  //endpoints
  discoverMoviesURL = API_URL + "/discover/movie";
  topRatedMoviesURL = API_URL + "/movie/top_rated";
  upcomingMoviesURL = API_URL + "/movie/upcoming";
  movieDetailURL = API_URL + "/movie";
  personDetailURL = API_URL + "/person";
  searchMovieResultsURL = API_URL + "/search/movie";
  searchPersonResultsURL = API_URL + "/search/person";

  constructor(private _http: HttpClient) {}
  getMovies(rating?: string) {
    return this._http.get<Movie[]>(this.discoverMoviesURL, {
      params: {
        api_key: API_KEY,
        certification_country: "US",
        certification: rating
      }
    });
  }

  getTopRatedMovies(rating?: string) {
    return this._http.get<Movie[]>(this.topRatedMoviesURL, {
      params: {
        api_key: API_KEY,
        certification_country: "US",
        certification: rating
      }
    });
  }

  getUpcomingMovies(rating?: string) {
    return this._http.get<Movie[]>(this.upcomingMoviesURL, {
      params: {
        api_key: API_KEY,
        certification_country: "US",
        certification: rating
      }
    });
  }

  getMovieDetails(id: number) {
    return this._http.get<Movie[]>(`${this.movieDetailURL}/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "release_date,images,similar,credits"
      }
    });
  }

  getPersonDetails(person_id: number) {
    return this._http.get<Person[]>(`${this.personDetailURL}/${person_id}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        append_to_response: "movie_credits,genre"
      }
    });
  }

  getSearchResults(query: any) {
    return this._http.get<Movie[]>(`${this.searchMovieResultsURL}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: `${query}`,
        adult: "true"
      }
    });
  }

  getPersonSearchResults(query: any) {
    return this._http.get<Person[]>(`${this.searchPersonResultsURL}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: `${query}`
      }
    });
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
