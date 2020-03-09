import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "../app-routing.module";

import { HttpClientModule } from "@angular/common/http";
import { DataService } from "../data.service";
import { SearchComponent } from "../search/search.component";

@NgModule({
  declarations: [routingComponents, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [DataService],
  bootstrap: []
})
export class SearchModule {}
