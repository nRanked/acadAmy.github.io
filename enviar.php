<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$destinatario = "adrianarcas80@gmail.com";
$asunto = "Nuevo mensaje del formulario de contacto";

$contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;

mail($destinatario, $asunto, $contenido);

header("Location: index.html");
?>