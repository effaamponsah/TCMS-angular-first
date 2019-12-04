import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  clients = [
    { id: 1, name: "Dennis Effa" },
    { id: 2, name: "Barbara Effa" },
    { id: 1, name: "Marian Effa" },
    { id: 1, name: "Andrew Effa" }
  ];
}
