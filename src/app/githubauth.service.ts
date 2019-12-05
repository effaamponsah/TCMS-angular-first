import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubauthService {
  private gitHubUrl =
    "https://github.com/login/oauth/authorize?scope=user:email&client_id=9925fb6388f7056be746";
  constructor(private http: HttpClient) {}

  getAccess(): Observable<any> {
    return this.http.get<any>(this.gitHubUrl);
  }
}
