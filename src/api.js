const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dlcfDURSu4hfw89qBdgk/scores/";

async function getScores() {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}
