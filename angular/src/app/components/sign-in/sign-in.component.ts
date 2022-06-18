import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { UserCredentials } from "src/app/interfaces/user-credentials";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  incorrectLoginAttempt: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submitForm() {
    const UserCredentials: UserCredentials = this.loginForm.value;

    // Reset any incorrect login attempt
    if (this.incorrectLoginAttempt) {
      this.incorrectLoginAttempt = false;
    }

    // Verify the password is 'password'
    if (UserCredentials.password === "password") {
      // Authenticate in user service
      this.userService.authenticatedUser(UserCredentials);
      // Navigate to the signed in component
      this.router.navigate(["signedin"]);
    } else {
      // Flag an incorrect login attempt has been made
      this.incorrectLoginAttempt = true;
    }
  }
}
