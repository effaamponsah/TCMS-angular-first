import { Injectable } from "@angular/core";
import { Client } from "./screens/clients/client";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClientserviceService {
  constructor(private http: HttpClient) {}
  private clientsUrl = "https://boiling-bastion-30474.herokuapp.com";

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl + "/clients");
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl + "/addAClient", client);
  }
}
