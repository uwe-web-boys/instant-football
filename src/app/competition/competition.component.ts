import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from "./competition.service";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  id;
  competition;

  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService
  ) { }

  ngOnInit(): void {
    this.getCompetition();
  }

  getCompetition(): void {
    // Get the competition id from the route
    const id = +this.route.snapshot.paramMap.get('id');
    // Make the call to return the competition data from the api
    this.competitionService.getCompetition(id).subscribe(
      competition => {
        this.competition = competition;
      }
    )
  }
}
