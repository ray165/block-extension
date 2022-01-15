let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


const testData = [{
    "moomoo": "cow"
}, {
    "chocolate": "milk"
}, {
    "apple": "sauce"
}]



chrome.storage.local.set({"badDude007": 
    "blocked because he's annoying"
}, () => console.log("data sent!"))

chrome.storage.local.get(["badDude007"], (result) => {
    console.log(result)
})

// For removal
chrome.storage.local.clear(() => {
    console.log('Everything was removed');
});