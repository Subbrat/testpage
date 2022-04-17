/* Modified from open source For personal and community use by https://github.com/subbrat/ */
// but API thing isn't easy, kindly use with caution!
{
    // refresh and show
    const countE0 = document.getElementById('ct00');
    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/subbrat/testpage/?amount=+1')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
}