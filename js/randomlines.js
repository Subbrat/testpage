/* Made from scratch by https://github.com/subbrat/ */
{
    { //wr1
        const lnc1 = [
            "",
        ];
        ! function Newline() {
            const randomLine = Math.floor(Math.random() * lnc1.length);
            document.getElementById('line1').innerHTML = lnc1[randomLine];
        }();
    } { //wr2
        const lnc2 = [
            "",
        ];
        ! function Newline() {
            const randomLine = Math.floor(Math.random() * lnc2.length);
            document.getElementById('line2').innerHTML = lnc2[randomLine];
        }();
    }
}