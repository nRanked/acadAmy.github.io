function loadHeaderFooter() {
  fetch('imports/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  fetch('imports/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
}

// Llama a la función cuando se cargue la página
window.onload = loadHeaderFooter;
