import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ClientserviceService } from "src/app/clientservice.service";
@Component({
  selector: "app-clientform",
  templateUrl: "./clientform.component.html",
  styleUrls: ["./clientform.component.css"]
})
export class ClientformComponent implements OnInit {
  newCustomerForm = new FormGroup({
    name: new FormControl(""),
    phone: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl("")
  });
  constructor(private formService: ClientserviceService) {}

  ngOnInit() {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    this.formService
      .addClient(this.newCustomerForm.value)
      .subscribe(h => console.log(h));
  }
}
