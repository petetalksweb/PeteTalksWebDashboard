var toReadListKey = 'PeteTalksWebDashboard:toReadList';

function getToReadList() {
    var toReadListResponse = localStorage.getItem(toReadListKey);
    if(toReadListResponse) { // if value has been saved before
        return JSON.parse(toReadListResponse);
    }
    return [];
}

function setToReadList(toReadList) {
    localStorage.setItem(toReadListKey, JSON.stringify(toReadList));
}

function addToReadList(url, title) {
    var list = getToReadList();
    list.unshift({'url' : url, 'title' : title});
    setToReadList(list);
}