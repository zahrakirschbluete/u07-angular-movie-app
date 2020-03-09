import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { Person } from "./person.model";
import { API_KEY, API_URL } from "./api.config";

@Injectable({
  providedIn: "root"
})
export class DataService {
  //endpoints
  discoverMoviesURL = API_URL + "/discover/movie";
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
        append_to_response: "movie_credits"
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
  //  getSearchResults() {
  //   return this._http.get<Movie[]>(this.searchResultsURL + API_KEY + "&language=en-US&query=indiana%20jones&page=1&include_adult=true");
  // }
}
