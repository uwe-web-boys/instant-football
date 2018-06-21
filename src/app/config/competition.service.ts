import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()
export class CompetitionService {
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get(environment.apiUrls.competitions, environment.apiData);
  }
}
