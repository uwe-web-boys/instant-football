import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable()
export class CompetitionService {
  constructor(private http: HttpClient) {}

  getCompetition(id) {
    return this.http.get(`${environment.api.urls.competitions}/${id}`, environment.api.data);
  }
}
