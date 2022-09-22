let hourId = document.getElementById("hours");
let minId = document.getElementById("minutes");
let secId = document.getElementById("seconds");
let ampmId = document.getElementById("ampm");

let updateTime = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourId.innerText = h;
  minId.innerText = m;
  secId.innerText = s;
  ampmId.innerText = ampm;

  setTimeout(() => {
    updateTime();
  }, 1000);
};
updateTime();
