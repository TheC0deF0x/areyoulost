// Check if the user is logged in. If they are then we can monitor them
chrome.storage.local.get(["name"], function (userObj) {
  if (userObj.name) {
    console.log("Activating monitoring...");
    let inactivityTime = function () {
      let time;
      window.onload = resetTimer;
      document.onmousemove = resetTimer;
      document.onkeypress = resetTimer;

      function askIfLost() {
        console.log("Are you lost?");
      }

      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(askIfLost, 5000);
      }
    };
    inactivityTime();
    console.log("Please wait...");
  }
});

// TODO
// Add a message for when a user logs in to begin the injection.
// If already asked once then dont ask again.


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request, sender, sendResponse);
//   sendResponse(JSON.stringify(request));
// });
