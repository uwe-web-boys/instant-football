// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionComponent } from './competition/competition.component';

// Services
import { CompetitionsService } from './competitions/competitions.service';
import { CompetitionService } from './competition/competition.service';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CompetitionsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CompetitionsService,
    CompetitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
