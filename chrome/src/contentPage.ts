// Add a listener for messages from the user service
// chrome.runtime.onMessage.addListener(function (request) {
//   if(request.action == 'inject') {

//   }
// });

// Check if the user is logged in. If they are then we can monitor them
chrome.storage.local.get(["name"], function (userObj) {
  // If we have the users name stored then we can inject the monitoring script
  if (userObj.name) {
    monitorDwellTime();
  }
});

// Declare a boolean for once a user has already seen the prompt
// We don't need to prompt them every single time they're inactive for 5 seconds.
let prompted: boolean = false;

function monitorDwellTime() {
  console.log("Activating monitoring...");
  let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    // Reset on mouse movement
    document.onmousemove = resetTimer;
    // Reset if the user presses a key
    document.addEventListener("keydown", resetTimer);

    // Prompt the user
    function askIfLost() {
      console.log("Are you lost?");
      prompted = true;
    }

    // Reset the timer count
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(askIfLost, 5000);
    }
  };
  inactivityTime();
  console.log("Please wait...");
}

// TODO
// Add a message for when a user logs in to begin the injection.
