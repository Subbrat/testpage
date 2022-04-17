{

    // right click prevention
    document.oncontextmenu = new Function("return false");
} {
    function refreshPage() {
        var page_y = $(document).scrollTop();
        window.location.href = window.location.href + '?page_y=' + page_y;
    }
    window.onload = function () {
        setTimeout(refreshPage, 35000);
        if (window.location.href.indexOf('page_y') != -1) {
            var match = window.location.href.split('?')[1].split("&")[0].split("=");
            $('html, body').scrollTop(match[1]);
        }
    }
} {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("hidhead").style.top = "0";
        } else {
            document.getElementById("hidhead").style.top = "-83px";
        }
        prevScrollpos = currentScrollPos;
    }
}