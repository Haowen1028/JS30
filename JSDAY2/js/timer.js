const now = new Date();
console.log(Dtimer); //取得目前時間

const seconds = document.querySelector('#timer-sec');
const mine = document.querySelector('#timer-min');
const hours = document.querySelector('#timer-hours');

let second = now.getSecond() * 6 + 90;
let minute = now.getMinute() * 6 + 90;
let hour = now.getHours() * 6 +90;

seconds