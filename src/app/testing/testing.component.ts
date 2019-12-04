import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [
    { id: 1, name: "Dennis" },
    { id: 2, name: "Isaac" }
  ];

}
