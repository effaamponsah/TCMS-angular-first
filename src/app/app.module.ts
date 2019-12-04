import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CustomersComponent } from "./customers/customers.component";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DummyComponent } from "./dummy/dummy.component";
import { TestingComponent } from "./testing/testing.component";
import { HomeComponent } from "./screens/home/components/home/home.component";
import { ClientCardComponent } from "./screens/clients/components/client-card/client-card.component";
import { ClientsScreenComponent } from "./screens/clients/clients-screen/clients-screen.component";
import { HttpClientModule } from "@angular/common/http";
// const appRoutes: Routes = [
//   // { path: "customer", component: CustomersComponent },
//   // { path: "projects", component: ProjectsComponent },
//   // { path: "home", component: AppComponent },
//   // { path: '',   redirectTo: '/home', pathMatch: 'full' },
// ];
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CustomersComponent,
    DummyComponent,
    TestingComponent,
    HomeComponent,
    ClientCardComponent,
    ClientsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
