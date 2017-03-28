chrome.contextMenus.create({
    "title": "Add to read later list",
    "contexts": ["page"]
});
chrome.contextMenus.create({
    "title": "Add link to read later list",
    "contexts": ["link"]
});
chrome.contextMenus.create({
    "title": "Add selection to snippets list",
    "contexts": ["selection"]
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if(info.linkUrl) {
        addToReadList(info.linkUrl, info.linkUrl);
    } else if(info.selectionText) {
        alert(info.selectionText);
        addToSnippetsList(tab.url, tab.title, info.selectionText);
    } else {
        addToReadList(tab.url, tab.title);
    }
});