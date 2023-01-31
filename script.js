let qtext = document.querySelectorAll("div.qtext");
let answer = document.querySelectorAll(".answer");
q = [];
r = [];
qtext.forEach(function (e) {
  q.push(e.innerText);
});
answer.forEach(function (e) {
  r.push(e.innerText.split('\n\n'));
});

console.log(q, r);