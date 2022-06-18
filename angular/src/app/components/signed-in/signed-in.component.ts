import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signed-in",
  templateUrl: "./signed-in.component.html",
  styleUrls: ["./signed-in.component.css"],
})
export class SignedInComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  name: string = this.userService.name;

  ngOnInit(): void {}

  logout() {
    // First lets clear local storage
    this.userService.logoutAndClearStorage();
    // Redirect to the signin page
    this.router.navigate(["signin"]);
  }
}
