let answer = document.querySelectorAll(".answer");
let qtext = document.querySelectorAll("div.qtext");
q = [];
r = [];
qtext.forEach(function (e) {
  q.push(e.innerText);
});
answer.forEach(function (e) {
  r.push(e.innerText);
});

console.log(q, r);
