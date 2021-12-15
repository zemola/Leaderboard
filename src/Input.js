import './data.js'
export default (data) => {
  const scores = document.querySelector(".display-score");
  const ul = scores.firstElementChild;
  ul.innerHTML = "";
  data.forEach((info) => {
    ul.innerHTML += `<li>
      <p>${info.name} :</p>
      <p>${info.score}</p>
    </li>`;
  });
};
