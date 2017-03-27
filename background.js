chrome.contextMenus.create({
    "title": "Add to read later list",
    "contexts": ["page"],
    "onclick": function() {
        alert('yo yo yo');
    }
});