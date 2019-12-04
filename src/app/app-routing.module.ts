import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DummyComponent } from "./dummy/dummy.component";
import { TestingComponent } from "./testing/testing.component";
import { HomeComponent } from "./screens/home/components/home/home.component";
import { ClientCardComponent } from "./screens/clients/components/client-card/client-card.component";
import { CustomersComponent } from "./customers/customers.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ClientsScreenComponent } from './screens/clients/clients-screen/clients-screen.component';

const routes: Routes = [
  { path: "hello", component: TestingComponent },
  {
    path: "clients",
    component: CustomersComponent,
    children: [
      { path: "", component: ClientsScreenComponent },
      { path: "1", component: ClientCardComponent }
    ]
  },
  { path: "project", component: ProjectsComponent },
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
