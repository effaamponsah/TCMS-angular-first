import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clients-screen",
  templateUrl: "./clients-screen.component.html",
  styleUrls: ["./clients-screen.component.css"]
})
export class ClientsScreenComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  clients = [
    { id: 1, name: "Dennis" },
    { id: 2, name: "James" },
    { id: 3, name: "Bill" }
  ];
}
