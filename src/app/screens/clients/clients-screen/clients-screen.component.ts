import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../client";
import { Observable } from "rxjs";
import { ClientserviceService } from "src/app/clientservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-clients-screen",
  templateUrl: "./clients-screen.component.html",
  styleUrls: ["./clients-screen.component.css"]
})
export class ClientsScreenComponent implements OnInit {
  results = [];
  constructor(
    private clientService: ClientserviceService,
    private router: Router,
  ) {}
  customersObservable: Observable<Client[]>;
  retrievedClients: Array<Client> = [];
  ngOnInit() {
    this.clientService.getClients().subscribe(client => {
      this.retrievedClients = client;
    });
  }

  addClient() {
    this.router.navigate(["/clients/add"]);
  }
}
