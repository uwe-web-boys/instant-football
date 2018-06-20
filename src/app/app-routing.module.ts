import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompetitionComponent } from "./competition/competition.component";

const routes: Routes = [
  {
    path: "competition",
    component: CompetitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
