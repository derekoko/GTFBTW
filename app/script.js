document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const timeInput = document.getElementById('time');
  const time = timeInput.value;

  // Send message to background.js
  chrome.runtime.sendMessage({ time: time });
});
