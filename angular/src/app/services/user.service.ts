import { Injectable } from "@angular/core";
import { UserCredentials } from "../interfaces/user-credentials";

@Injectable({
  providedIn: "root",
})
export class UserService {
  name?: string;

  constructor() {}

  authenticatedUser(user: UserCredentials) {
    chrome.storage.local.set({ name: user.username }, function () {});
    this.name = user.username;
  }

  checkLocalStorage() {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(["name"], function (result: any) {
        // If the user is there then pass to the user service
        if (result.name) {
          this.name = result.name;
          resolve(result.name);
        } else {
          reject(false);
        }
      });
    });
  }
}
