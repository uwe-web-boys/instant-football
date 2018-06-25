import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()
export class CompetitionsService {
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get(environment.api.urls.competitions, environment.api.data);
  }
}
