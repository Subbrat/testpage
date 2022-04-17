/* Modified from open source For personal and community use by https://github.com/subbrat/ */
// but API thing isn't easy, kindly use with caution!
{
    // refresh and show
    const countE0 = document.getElementById('ct0');
    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/subbrat/profileio/?amount=+1')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
} { // only show
    const E1 = document.getElementById('ct1');
    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/get/subbrat/api')
            .then(res => res.json())
            .then(res => {
                E1.innerHTML = res.value;
                countE1.innerHTML = res.value;
            })
    }
}