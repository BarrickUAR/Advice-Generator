let advices = {};

function renderAdvices() {
  document.getElementById('adviceId').textContent = ` #${advices.slip.id}`;
  document.getElementById('content').innerHTML = `<p>"${advices.slip.advice}"</p>`;
}

function handleAdviceClick(e) {
  e.preventDefault();
  init();
}

function init() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      advices = data;
      renderAdvices();
    });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.rollBtn').addEventListener('click', handleAdviceClick);
  init();
});
