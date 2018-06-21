import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from "../config/competitions.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  title = 'instant.football';
  competitions;

  constructor(private competitionsService: CompetitionsService) {}

  ngOnInit() {
    this.competitionsService.getCompetitions().subscribe(competitions => {
      this.competitions = competitions;
    });
  }
}
