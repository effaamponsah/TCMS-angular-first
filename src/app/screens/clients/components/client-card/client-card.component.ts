import { Component, OnInit, Input } from "@angular/core";
import { Client } from "../../client";
@Component({
  selector: "app-client-card",
  templateUrl: "./client-card.component.html",
  styleUrls: ["./client-card.component.css"]
})
export class ClientCardComponent implements OnInit {
  @Input() customername: String;
  @Input() customerEmail: String;
  @Input() client: Client;
  constructor() {}

  ngOnInit() {}
  dummyClient: Array<Client> = [
    {
      name: "String",
      phone: "String",
      email: "String",
      address: "String"
    }
  ];
}
