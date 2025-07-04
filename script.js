function toggleMode(imagePath = './assets') {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', `${imagePath}/avatar-light.png`)
  } else {
    img.setAttribute('src', `${imagePath}/avatar.png`)
  }
}

function toggleDescription(button) {
  const container = button.previousElementSibling; // assumes .description-container is just before button
  container.classList.remove('collapsed');
  button.remove();
}