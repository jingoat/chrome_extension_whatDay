(function setToday() {
  const dayMap = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "日"
  };
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const day = today.getDay();
  const year = today.getFullYear();
  document.getElementById("today").innerText = `今天是星期${
    dayMap[day]
  },${year}年${month + 1}月${date}号`;
})();

function getHowLong(date) {
  let howLong = 0;
  const leave = new Date(date).getTime() - new Date().getTime(); //计算时间差
  howLong = Math.floor(leave / (1000 * 60 * 60 * 24)) + 1;
  return howLong;
}

(function setHowLongToWeekend() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const todayRemainder =
    (new Date(`${todayYear}-${todayMonth}-${todayDate + 1}`) - new Date()) /
    (24 * 60 * 60 * 1000);
  const todayRemainderFinal = todayRemainder
    .toString()
    .split("")
    .splice(1, 3)
    .join("");
  const howLong =
    6 -
    new Date(`${todayYear}-${todayMonth}-${todayDate + 1}`).getDay() +
    todayRemainderFinal;
  document.getElementById("weekend").innerText = `距离这周末约有${howLong}天`;
})();

(function setMidAutumn() {
  const howLong = getHowLong("2021-9-21");
  document.getElementById(
    "mid-autumn"
  ).innerText = `距离中秋假期还有${howLong}天`;
})();

(function setSpring() {
  const howLong = getHowLong("2021-10-1");
  document.getElementById(
    "national"
  ).innerText = `距离国庆假期还有${howLong}天`;
})();

(function setSpring() {
  const howLong = getHowLong("2022-1-1");
  document.getElementById(
    "new-year"
  ).innerText = `距离元旦假期还有${howLong}天`;
})();

(function setSpring() {
  const howLong = getHowLong("2022-2-1");
  document.getElementById("spring").innerText = `距离春节假期还有${howLong}天`;
})();
