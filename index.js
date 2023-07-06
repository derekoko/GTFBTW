async function getCatBoy() {
  const response = await fetch('https://api.catboys.com/baka');
  const data = await response.json();
  const baka = data.url;
  const musicUrl = ['airhorn.mp3'];

  console.log(`HELLO PLS RETURN ${baka}`);

  document.querySelector('.cat').innerHTML = `
<img id='baka' src="${baka}" alt="baka img">`;
  document.querySelector(
    '.audio'
  ).innerHTML = `<audio id="music" controls autoplay loop>
<source src="../music/airhorn/.mp3" />
</audio>`;
}
window.addEventListener('load', function () {
  let image = document.getElementById('baka');

  function resizeWindowToImage() {
    let imageWidth = image.naturalWidth;
    let imageHeight = image.naturalHeight;
    window.resizeTo(imageWidth, imageHeight);
  }

  image.addEventListener('load', resizeWindowToImage);
});

getCatBoy();
// async function getCatBoy() {
//   const response = await fetch('https://api.catboys.com/baka');
//   const data = await response.json();
//   const baka = data.url;
//   const musicUrl = ['airhorn.mp3'];

//   console.log(`${baka}`);

//   // Create the image element
//   const image = new Image();

//   // Event listener to resize window after image loads
//   image.addEventListener('load', function () {
//     const imageWidth = image.naturalWidth;
//     const imageHeight = image.naturalHeight;
//     window.resizeTo(imageWidth, imageHeight);
//   });

//   // Set the image source and alt text
//   image.src = baka;
//   image.alt = 'baka img';

//   // Add the image to the DOM
//   document.querySelector('.cat').appendChild(image);

//   // Create the audio element
//   const audio = document.createElement('audio');

//   // Event listener to play audio once it can be played
//   audio.addEventListener('canplay', function () {
//     audio.play();
//   });

//   // Set the audio source
//   audio.src = '../music/airhorn/.mp3';

//   // Add the audio element to the DOM
//   document.querySelector('.audio').appendChild(audio);
// }

// window.addEventListener('load', getCatBoy);
