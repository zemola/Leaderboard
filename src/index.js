import './style.css';
import input from './Input.js';
import { getScores, addScore } from './api.js';

const btn = document.querySelector('.submit-btn');

const mainRender = async () => {
  const array = await getScores();
  input(array);
};
mainRender();

btn.addEventListener('click', async () => {
  const user = document.querySelector('#name').value;
  const score = Number(document.querySelector('#input-score').value);
  const obj = { user, score };

  addScore(obj);
  document.querySelector('#name').value = '';
  document.querySelector('#input-score').value = '';
});

document.querySelector('.refresh-btn').addEventListener('click', mainRender);