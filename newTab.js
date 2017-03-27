function generateLIs(ulID, pages) {
    var ul = document.getElementById(ulID);
    for(var page of pages) {
        ul.appendChild(generateLI(ulID, page));
    }
}

function generateLI(ulID, pageObject) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = pageObject.url;
    a.innerHTML = pageObject.title;
    li.appendChild(a);
    var close = document.createElement('div');
    close.onclick = function(event) {
        removeLI(ulID, event.srcElement.parentNode);
    };
    close.innerHTML = 'xxx';
    li.appendChild(close);
    return li;
}

function removeLI(ulID, li) {
    document.getElementById(ulID).removeChild(li);
    var aTag = li.getElementsByTagName('a')[0]
    deleteFromReadList(aTag.href, aTag.innerHTML);
}

document.addEventListener('DOMContentLoaded', function() {
    generateLIs('toReadList', getToReadList());
    chrome.topSites.get(function(topSites) {
        generateLIs('topSitesList', topSites);
    });
});