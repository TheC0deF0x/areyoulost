chrome.runtime.onMessage.addListener((request, sender, respond) => {
  const handler = new Promise((resolve, reject) => {
    console.log(request);
  });

  handler.then((message) => respond(message)).catch((error) => respond(error));

  return true;
});
