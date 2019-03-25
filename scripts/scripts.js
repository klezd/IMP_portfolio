function changeTab(){
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
}

function minus(a,b) {
    return a-b;
}

$(document).ready(function () {
    window.addEventListener("hashchange", changeTab);
    minus(5,2);
    changeTab();
});
