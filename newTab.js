function generateLIs(toReadList) {
    var toReadListUL = document.getElementById('toReadList');
    for(var page of toReadList) {
        toReadListUL.appendChild(generateLI(page));
    }
}

function generateLI(pageObject) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = pageObject.url;
    a.innerHTML = pageObject.title;
    li.appendChild(a);
    var close = document.createElement('div');
    close.onclick = function(event) {
        removeLI(event.srcElement.parentNode);
    };
    close.innerHTML = 'xxx';
    li.appendChild(close);
    return li;
}

function removeLI(li) {
    document.getElementById('toReadList').removeChild(li);
    var aTag = li.getElementsByTagName('a')[0]
    deleteFromReadList(aTag.href, aTag.innerHTML);
}

document.addEventListener('DOMContentLoaded', function() {
    generateLIs(getToReadList());
});