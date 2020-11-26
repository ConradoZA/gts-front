import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RelationsComponent } from "./views/relations/relations.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "relations", component: RelationsComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
