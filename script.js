const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  
  try {
    const response = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      alert('Formulario enviado con éxito');
      contactForm.reset();
    } else {
      alert('Error al enviar el formulario');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el formulario');
  }
});
