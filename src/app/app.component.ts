import { Component } from '@angular/core';
import { CompetitionService } from "./config/competition.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'instant.football';

  competitions;

  constructor(private competitionService: CompetitionService) {}

  ngOnInit() {
    this.competitionService.getCompetitions().subscribe(competitions => {
      this.competitions = competitions;
    });
  }
}
