{

    // right click prevention
    document.oncontextmenu = new Function("return false");
}


{
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

{
    // the smooth slider
    document.addEventListener("DOMContentLoaded", function () {
        var t = document.querySelector(".s6slide");

        function e(n) {
            var o = window.pageYOffset,
                a = Math.floor(Date.now());
            ! function t() {
                Math.easeInOutQuad = function (t) {
                    return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
                };
                var e = Math.min(1, (Math.floor(Date.now()) - a) / n);
                window.scroll(0, Math.ceil(Math.easeInOutQuad(e) * (0 - o) + o)), 0 === window.pageYOffset && callback(), requestAnimationFrame(t)
            }()
        }
        t.addEventListener("click", function () {
            window.requestAnimationFrame ? e(700) : window.scrollTo(0, 0)
        }), window.addEventListener("scroll", function () {
            280 < document.body.scrollTop || 280 < document.documentElement.scrollTop ? (t.removeAttribute("style", "transform: translateX(120px);"), t.setAttribute("style", "transform: translateX(0);")) : (t.removeAttribute("style", "transform: translateX(0);"), t.setAttribute("style", "transform: translateX(120px);"))
        })
    });
}
{
    {
        window.addEventListener('mouseup', function (event) {
            var box = document.getElementById('mySidebar');
            if (event.target != box && event.target.parentNode != box) {
                box.style.display = 'none';
            }
        });
    }


}