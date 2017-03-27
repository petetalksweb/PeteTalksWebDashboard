chrome.contextMenus.create({
    "title": "Add to read later list",
    "contexts": ["page"],
    "onclick": function() {
        alert('yo yo yo');
    }
});
chrome.contextMenus.create({
    "title": "Add link to read later list",
    "contexts": ["link"],
    "onclick": function() {
        alert('yo yo yo');
    }
});