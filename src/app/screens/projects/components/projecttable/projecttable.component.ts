import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/project.service";

@Component({
  selector: "app-projecttable",
  templateUrl: "./projecttable.component.html",
  styleUrls: ["./projecttable.component.css"]
})
export class ProjecttableComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(response => {
      console.log(response);
    });
  }
}
