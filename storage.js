var toReadListKey = 'PeteTalksWebDashboard:toReadList';
var snippetsListKey = 'PeteTalksWebDashboard:snippetsList';

function getToReadList() {
    return getList(toReadListKey);
}

function getSnippetsList() {
    return getList(snippetsListKey);
}

function getList(listKey) {
    var listResponse = localStorage.getItem(listKey);
    if(listResponse) { // if value has been saved before
        return JSON.parse(listResponse);
    }
    return [];
}

function setToReadList(toReadList) {
    setList(toReadListKey, toReadList);
}

function setSnippetsList(snippetsList) {
    setList(snippetsListKey, snippetsList);
}

function setList(listKey, list) {
    localStorage.setItem(listKey, JSON.stringify(list));
}

function addToReadList(url, title) {
    addToList(toReadListKey, url, title);
}

function addToSnippetsList(url, title, text) {
    addToList(snippetsListKey, url, title, text);
}

function addToList(listKey, url, title) {
    var list = getList(listKey);
    list.unshift({'url' : url, 'title' : title});
    setList(listKey, list);
}

function addToList(listKey, url, title, text) {
    var list = getList(listKey);
    list.unshift({'url' : url, 'title' : title, 'text' : text});
    setList(listKey, list);
}

function deleteFromReadList(url, title) {
    deleteFromList(toReadListKey, url, title);
}

function deleteFromSnippetsList(url, title, text) {
    deleteFromList(snippetsListKey, url, title, text);
}

function deleteFromList(listKey, url, title) {
    var list = getList(listKey);
    var indexToDelete = list.indexOf({'url' : url, 'title' : title});
    list.splice(indexToDelete, 1);
    setList(listKey, list);
}

function deleteFromList(listKey, url, title, text) {
    var list = getList(listKey);
    var indexToDelete = list.indexOf({'url' : url, 'title' : title, 'text' : text});
    list.splice(indexToDelete, 1);
    setList(listKey, list);
}