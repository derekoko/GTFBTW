async function getCatBoy() {
  const response = await fetch('https://api.catboys.com/baka');
  const data = await response.json();
  const baka = data.url;

  const random = Math.floor(Math.random() * 7) + 1;

  document.querySelector('.cat').innerHTML = `
<img id='baka' src="${baka}" alt="baka img">`;
  document.querySelector(
    '.audio'
  ).innerHTML = `<audio id="music" controls autoplay loop>
<source src="../music/${random}.mp3" />
</audio>`;
}

getCatBoy();
