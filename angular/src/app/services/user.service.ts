import { Injectable } from "@angular/core";
import { UserCredentials } from "../interfaces/user-credentials";
@Injectable({
  providedIn: "root",
})
export class UserService {
  name?: string;

  constructor() {}

  authenticatedUser(user: UserCredentials) {
    this.name = user.username;
  }
}
