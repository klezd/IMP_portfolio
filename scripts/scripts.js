function changeTab(){
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
}

function mathPlus(a,b) {
    var c = a + b;
    return c;
}

$(document).ready(function () {
    window.addEventListener("hashchange", changeTab);
    mathPlus(1,2);
    changeTab();
});
