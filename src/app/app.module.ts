import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CustomersComponent } from "./customers/customers.component";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DummyComponent } from './dummy/dummy.component';

const appRoutes: Routes = [
  { path: "customer", component: CustomersComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "home", component: AppComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, ProjectsComponent, CustomersComponent, DummyComponent],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class AppModule {}
