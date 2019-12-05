import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { GithubauthService } from "src/app/githubauth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showAlert = false;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private github: GithubauthService
  ) {}

  ngOnInit() {
    // if (this.afAuth.user ) {
    //   alert("there is a user");
    // } else {
    //   alert("no user");
    // }
    // alert(JSON.stringify(this.afAuth.authState));
    // alert("on init");
  }

}
