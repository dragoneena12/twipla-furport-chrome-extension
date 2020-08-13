let loadInformation = document.getElementById("loadInformation");

loadInformation.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "getInformation.js",
    });
  });
};
