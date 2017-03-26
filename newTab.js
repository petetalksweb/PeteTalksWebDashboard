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
    return li;
}
document.addEventListener('DOMContentLoaded', function() {
    generateLIs(getToReadList());
});