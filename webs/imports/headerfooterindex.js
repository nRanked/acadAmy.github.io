function loadHeaderFooter() {
  fetch('webs/imports/headerindex.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  fetch('webs/imports/footerindex.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
}

// Llama a la función cuando se cargue la página
window.onload = loadHeaderFooter;
