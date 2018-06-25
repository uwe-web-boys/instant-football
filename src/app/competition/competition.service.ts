import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()
export class CompetitionService {
  constructor(private http: HttpClient) {}

  getCompetition(id) {
    const competitionUrl = `${environment.api.urls.competitions}/${id}`
    return this.http.get(competitionUrl, environment.api.data);
  }
}
