const heartButton = document.getElementById('heartButton');
const loveLetter = document.getElementById('loveLetter');

heartButton.addEventListener('click', () => {
  loveLetter.style.height = '600px'; // adjust based on your message length
  heartButton.style.display = 'none'; // optional: itatago na yung heart pag napindot
});