document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const cedula = document.getElementById("cedula").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
  const horaCita = document.getElementById("hora_cita").value;
  const contrasena = document.getElementById("contrasena").value;
  const genero = document.getElementById("genero").value;
  const pais = document.getElementById("pais").value;
  const comentarios = document.getElementById("comentarios").value;
  const estadoCivil = document.querySelector('input[name="estado_civil"]:checked')?.value || 'No especificado';
  const hobbies = [];
  document.querySelectorAll('input[name="hobbies"]:checked').forEach(checkbox => {
    hobbies.push(checkbox.value);
  });
  resultado.innerHTML = `
    <p><strong>Cédula:</strong> ${cedula}</p>
    <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
    <p><strong>Dirección:</strong> ${direccion}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
    <p><strong>Hora de cita:</strong> ${horaCita}</p>
    <p><strong>Contraseña:</strong> ${contrasena}</p>
    <p><strong>Género:</strong> ${genero}</p>
    <p><strong>Estado civil:</strong> ${estadoCivil}</p>
    <p><strong>Hobbies:</strong> ${hobbies.length ? hobbies.join(', ') : 'Ninguno'}</p>
    <p><strong>País:</strong> ${pais}</p>
    <p><strong>Comentarios:</strong> ${comentarios}</p>
  `;
});
