import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
@Component({
  selector: "app-clientform",
  templateUrl: "./clientform.component.html",
  styleUrls: ["./clientform.component.css"]
})
export class ClientformComponent implements OnInit {
  name = new FormControl('');
  constructor() {}

  ngOnInit() {}
}
