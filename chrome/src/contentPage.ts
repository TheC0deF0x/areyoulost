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

// Function to prompt the user if they're lost
const askIfLost = function () {
  // Only run if we've not already prompted them
  if (!prompted) {
    console.log("Are you lost?");
    // We need to get the webcomponent from angular...
    prompted = true;
    // fetch(chrome.runtime.getURL("/prompt.component.html"))
    //   .then((r) => r.text())
    //   .then((html) => {
    //     document.body.insertAdjacentHTML("beforeend", html);
    //     // not using innerHTML as it would break js event listeners of the page
    //   });
  }
};

function monitorDwellTime() {
  console.log("Activating monitoring...");
  let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    // Reset on mouse movement
    document.onmousemove = resetTimer;
    // Reset if the user presses a key
    document.addEventListener("keydown", resetTimer);

    // Reset the timer count
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(askIfLost, 5000);
    }
  };
  inactivityTime();
  console.log("Please wait...");
}
