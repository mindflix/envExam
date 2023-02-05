let questions = document.querySelectorAll("div.qtext");
let answers = document.querySelectorAll(".answer");
q = [];
a = [];
questions.forEach(function (e) {
  q.push(e.innerText);
});
answers.forEach(function (e) {
  a.push(e.innerText.replace(/[\r\n\t]/gm, " "));
});

if (q.length) {
  fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ questions: q, answers: a }),
  })
    .then((res) => res.json())
    .then((data) => questions.forEach((e, index) => e.append(data[index])));
}
