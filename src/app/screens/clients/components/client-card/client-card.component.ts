import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-client-card",
  templateUrl: "./client-card.component.html",
  styleUrls: ["./client-card.component.css"]
})
export class ClientCardComponent implements OnInit {
  @Input() customername: any;
  constructor() {}

  ngOnInit() {}
  dummy ="Dennis Effa"
  name = this.dummy;
}
