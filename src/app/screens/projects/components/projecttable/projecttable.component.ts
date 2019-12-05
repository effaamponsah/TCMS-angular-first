import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/project.service";
import { Project } from "../../project";

@Component({
  selector: "app-projecttable",
  templateUrl: "./projecttable.component.html",
  styleUrls: ["./projecttable.component.css"]
})
export class ProjecttableComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  projects: Array<Project>;
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(response => {
      this.projects = response;
    });
  }
}
