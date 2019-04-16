function changeTab(){
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
}

function clickhere(sum) {
    var clicked = false;
    var nsum = sum + 1;
    return nsum;
}

$(document).ready(function () {
    window.addEventListener("hashchange", changeTab);
    changeTab();
});
