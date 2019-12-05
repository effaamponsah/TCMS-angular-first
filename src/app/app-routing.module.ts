import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DummyComponent } from "./dummy/dummy.component";
import { TestingComponent } from "./testing/testing.component";
import { HomeComponent } from "./screens/home/components/home/home.component";
import { ClientCardComponent } from "./screens/clients/components/client-card/client-card.component";
import { CustomersComponent } from "./customers/customers.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ClientsScreenComponent } from "./screens/clients/clients-screen/clients-screen.component";
import { ClientscreenComponent } from "./screens/clients/clientscreen/clientscreen.component";
import { ClientformComponent } from "./screens/clients/components/clientform/clientform.component";
import { ProjectscreenComponent } from "./screens/projects/projectscreen/projectscreen.component";

const routes: Routes = [
  { path: "hello", component: TestingComponent },
  {
    path: "clients",
    component: CustomersComponent,
    children: [
      { path: "", component: ClientsScreenComponent },
      { path: "1", component: ClientscreenComponent },
      { path: "add", component: ClientformComponent }
    ]
  },
  { path: "projects", component: ProjectscreenComponent },
  { path: "hi", component: DummyComponent },
  { path: "client", component: ClientCardComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
