function changeTab(){
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
}

$(document).ready(function () {
    window.addEventListener("hashchange", changeTab);
    changeTab();
});