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

    // Message the content worker to instruct it to carry out actions
    // chrome.tabs.query({}, (tabs) => {
    //   tabs.forEach((tab) => {
    //     chrome.tabs.sendMessage(tab.id, "Hello friend.");
    //   });
    // });
  }

  checkLocalStorage() {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(["name"], function (result: any) {
        // If the user is there then pass to the user service
        if (result.name) {
          // We have the users details
          this.name = result.name;
          resolve(result.name);
        } else {
          reject("No user in local storage");
        }
      });
    });
  }

  logoutAndClearStorage() {
    chrome.storage.local.clear(() => {});
  }
}
