import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { API_KEY, API_URL } from "./api.config";

@Injectable({
  providedIn: "root"
})
export class DataService {
  discoverMoviesURL = API_URL + "/discover/movie";
  movieDetailURL = API_URL + "/movie";

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

  getMovieDetails(id: number) {
    return this._http.get<Movie[]>(`${this.movieDetailURL}/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "release_date,images,similar,credits"
      }
    });
  }
}
