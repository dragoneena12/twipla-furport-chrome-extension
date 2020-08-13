const tmp = document
  .getElementsByTagName("h1")[0]
  .innerText.split(/\r\n|\r|\n/);
const name = tmp[tmp.length - 1];
window.open("https://www.furport.tk/events/new?name=" + name, "_blank");
