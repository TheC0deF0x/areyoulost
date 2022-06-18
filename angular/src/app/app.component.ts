import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.checkLocalStorage().then((result: string) => {
      if (result) {
        this.userService.name = result;

        this.router.navigate(["signedin"]);
      }
    });
  }
}
