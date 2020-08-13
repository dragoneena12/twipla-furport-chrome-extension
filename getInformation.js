const params = new URLSearchParams();

let tmp = document.getElementsByTagName("h1")[0].innerText.split(/\r\n|\r|\n/);
params.append("name", tmp[tmp.length - 1]);
tmp = document
  .querySelector(
    "#container > tbody > tr > td.left_col.pad20 > p:nth-child(2) > a"
  )
  .getAttribute("href")
  .split("/");
params.append("twitter_id", tmp[tmp.length - 1]);
tmp = document
  .querySelector(
    "#container > tbody > tr > td.left_col.pad20 > div:nth-child(14)"
  )
  .innerText.split(/\r\n|\r|\n/)[0];
params.append("place", tmp);
tmp = document
  .querySelector(
    "#container > tbody > tr > td.left_col.pad20 > div.arrow_box > span"
  )
  .innerText.match(/\d+/g);
let date;
tmp[3]
  ? (date = new Date(tmp[0], tmp[1] - 1, tmp[2], tmp[3], tmp[4]))
  : (date = new Date(tmp[0], tmp[1] - 1, tmp[2]));
params.append("start_datetime", date.toISOString());
params.append("end_datetime", date.toISOString());
window.open("https://stg.furport.tk/events/new?" + params.toString(), "_blank");
