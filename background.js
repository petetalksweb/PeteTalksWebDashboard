chrome.contextMenus.create({
    "title": "Add to read later list",
    "contexts": ["page"]
});
chrome.contextMenus.create({
    "title": "Add link to read later list",
    "contexts": ["link"]
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if(info.linkUrl) {
        addToReadList(info.linkUrl, info.linkUrl);
    } else {
        addToReadList(tab.url, tab.title);
    }
});