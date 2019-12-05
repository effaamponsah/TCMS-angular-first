import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showAlert = false;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    // if (this.afAuth.user ) {
    //   alert("there is a user");
    // } else {
    //   alert("no user");
    // }
    // alert(JSON.stringify(this.afAuth.authState));
    // alert("on init");
    console.log("init" + JSON.stringify(this.afAuth.user));
  }
  try() {
    alert("Yes");
  }
  ngAfterViewChecked() {
    console.log("checked" + JSON.stringify(this.afAuth.idToken));
  }
  ngAfterViewInit() {
    console.log("after" + JSON.stringify(this.afAuth.idToken));
  }
  ngOnChanges() {
    console.log("Changes");
  }
  signIn() {
    this.showAlert = true;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
