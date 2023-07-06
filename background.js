// entertainment websites:
const badSites = [
  'youtube.com',
  'reddit.com',
  'facebook.com',
  'twitter.com',
  'instagram.com',
  'tiktok.com',
  'netflix.com',
  'crunchyroll.com',
  '9gag.com',
  'hulu.com',
  'primevideo.com',
  'fortnite.com',
];

//Overall Logic
//Event Listener listening for creation of new tab containing any part of the badSites URL's

// const newPerms = { permissions: badSites };
let time = 5;
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    for (const site of badSites) {
      if (tab.url.includes(site)) {
        const intervalId = setInterval(() => {
          time--;
          if (time === 0) {
            clearInterval(intervalId);
            chrome.windows.create({
              url: './app/index.html',
              type: 'popup',
              width: 1750,
              height: 1200,
            });
          }
        }, 1000);
        time = 5;
        break;
      }
    }
  }
});

// chrome.browserAction.onClicked.addListener((tab) => {
//   if (extensionIsActive) {
//     chrome.browserAction.setIcon({ path: './images/icon-128.png' });
//     extensionIsActive = false;
//   } else {
//     chrome.browserAction.setIcon({ path: './images/active-128.png' });
//     extensionIsActive = true;
//   }
// });
