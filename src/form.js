document.addEventListener("DOMContentLoaded", function() {
    // Simula la obtención de datos del usuario, como el nombre, sexo y edad
    const usuario = {
        nombre: null,
        sexo: null,
        edad: null
    };
    
    // Llena el formulario automáticamente
    document.getElementById("nombre").value = usuario.nombre || "";
    document.getElementById("sexo").value = usuario.sexo || "";
    document.getElementById("edad").value = usuario.edad || "";

    // Escucha el evento de envío del formulario
    document.getElementById("wellcome-Form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        
        // Obtiene el nombre ingresado
        const nombreIngresado = document.getElementById("nombre").value;

        // Muestra el saludo de bienvenida
        alert("Bienvenido, " + nombreIngresado + "!");
    });
});
