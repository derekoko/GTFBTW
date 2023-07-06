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

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  for (const site of badSites) {
    if (tab.url.includes(site)) {
      chrome.windows.create({ url: './app/index.html', type: 'popup' });
      break;
    }
  }
});
