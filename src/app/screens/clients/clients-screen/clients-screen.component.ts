import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../client";
import { Observable } from "rxjs";

@Component({
  selector: "app-clients-screen",
  templateUrl: "./clients-screen.component.html",
  styleUrls: ["./clients-screen.component.css"]
})
export class ClientsScreenComponent implements OnInit {
  results = [];
  constructor(private http: HttpClient) {}
  customersObservable: Observable<Client[]>;
  ngOnInit() {
    // this.results = this.http.get<Client>("https://boiling-bastion-30474.herokuapp.com/clients")
    // alert(JSON.stringify(this.getClients()));
    // this.customersObservable = this.http
      // .get<Client[]>("https://boiling-bastion-30474.herokuapp.com/clients").subscribe(d =>console.log(d))
  }
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(
      "https://boiling-bastion-30474.herokuapp.com/clients"
    );
  }
  clients = [
    { id: 1, name: "Dennis" },
    { id: 2, name: "James" },
    { id: 3, name: "Bill" }
  ];
}
