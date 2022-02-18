export default (data) => {
  const scores = document.querySelector('.display-score');
  const ul = scores.firstElementChild;
  ul.innerHTML = '';
  data.forEach((info) => {
    ul.innerHTML += `<li>
      <p class="user-info">${info.user} :</p>
      <p class="score">${info.score}</p>
    </li>`;
  });
};