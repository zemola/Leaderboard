export default (data) => {
  const scores = document.querySelector('.display-score');
  const ul = scores.firstElementChild;
  ul.innerHTML = '';
  data.forEach((info) => {
    ul.innerHTML += `<li>
      <p>${info.user} :</p>
      <p>${info.score}</p>
    </li>`;
  });
};
