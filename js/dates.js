/* Modified from open source For personal and community use by https://github.com/subbrat/ */
// but API thing isn't easy, kindly use with caution!
{
  const date11 = new Date("4/17/2022"); //month date year
  const date12 = new Date();
  const diffTime = Math.abs(date12 - date11);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffTime + " milliseconds");
  console.log(diffDays + " days");
  document.getElementById("date1").innerHTML = diffDays - 1 + " days ago, this page was made.";
} {
  const date21 = new Date("3/23/2022"); //month date year
  const date22 = new Date();
  const diffTime = Math.abs(date22 - date21);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffTime + " milliseconds");
  console.log(diffDays + " days");
  document.getElementById("date2").innerHTML = diffDays - 1 + " days ago";
}