import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GithubauthService } from "src/app/githubauth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showAlert = false;
  constructor(private router: Router, private github: GithubauthService) {}

  ngOnInit() {}
}
