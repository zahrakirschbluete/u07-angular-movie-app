import { Component, OnInit } from "@angular/core";
import { Person } from "../person.model";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit {
  person$: Person[];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(params => +params["id"]),
        switchMap(id => this.dataService.getPersonDetails(id))
      )
      .subscribe(info => {
        this.person$ = info;
      });
  }
}
