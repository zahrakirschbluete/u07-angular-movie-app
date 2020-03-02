import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { API_KEY, API_URL } from "./api.config";

@Injectable({
  providedIn: "root"
})
export class DataService {
  apiURL = API_URL + "/discover/movie/?api_key=" + API_KEY;

  constructor(private _http: HttpClient) {}
  getMovies() {
    return this._http.get<Movie[]>(this.apiURL);
  }
}
