import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompetitionService {
  constructor(private http: HttpClient) {}

  competitionsUrl = 'https://api.football-data.org/v1/competitions';
  requestData = {
    headers: {
      'X-Auth-Token': '64224dc8a0204084871ab3cd5645070f'
    }
  };

  getCompetitions() {
    return this.http.get(this.competitionsUrl, this.requestData);
  }
}

