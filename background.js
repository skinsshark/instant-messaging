chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  suggest([{
    content: 'Sharon Zheng', description: 'Sharon Zheng'
  }]);
});

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
  alert(`why did u say ${text}`);
});
