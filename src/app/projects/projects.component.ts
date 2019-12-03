import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-projects",
  // templateUrl: "./projects.component.html",
  template:`
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  btnClick() {
    this.router.navigate(["/customer"]);
  };
}
