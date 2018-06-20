// Modules
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CompetitionComponent } from "./competition/competition.component";

// Config
import { CompetitionService } from "./config/competition.service";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
