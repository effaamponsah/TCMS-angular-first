import { Component, OnInit, Input } from "@angular/core";
import { Client } from "../../client";
@Component({
  selector: "app-client-card",
  templateUrl: "./client-card.component.html",
  styleUrls: ["./client-card.component.css"]
})
export class ClientCardComponent implements OnInit {
  @Input() customername: any;
  @Input() client: Client;
  constructor() {}

  ngOnInit() {}
  dummyClient: Array<Client> = [
    {
      id: 1,
      name: "Dennis"
    }
  ];
  dummy = "Dennis Effa";
  name = this.dummy;
}
