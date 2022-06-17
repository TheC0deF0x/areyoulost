import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-signed-in",
  templateUrl: "./signed-in.component.html",
  styleUrls: ["./signed-in.component.css"],
})
export class SignedInComponent implements OnInit {
  constructor(private userService: UserService) {}

  name: string = this.userService.name;

  ngOnInit(): void {}
}
