chrome.runtime.onInstalled.addListener(async (details) => {
    if(!details || details.reason !== 'update') {
      let url = chrome.runtime.getURL('/index.html');
  
      let tab = await chrome.tabs.create({ url });
  
      console.log(`Created tab ${tab.id}`);
    }
  });
  
  chrome.runtime.onMessage.addListener(async function (message, callback) {
    console.log(message);
  });       
  
  
  chrome.action.onClicked.addListener((tab) => {
    let url = chrome.runtime.getURL('/index.html');
    chrome.tabs.create({ url }).then((tab) => {
        console.log(`Created tab ${tab.id}`);
    });
  });
  