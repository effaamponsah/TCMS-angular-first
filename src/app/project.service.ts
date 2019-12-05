import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "./screens/projects/project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  private projectsUrl = "https://vast-citadel-94035.herokuapp.com/projects";
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
