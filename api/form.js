export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, mensaje } = req.body;
    // Aquí puedes procesar los datos del formulario
    // Por ejemplo, enviarlos por correo electrónico o guardarlos en una base de datos
    
    res.status(200).json({ message: 'Formulario recibido' });
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
