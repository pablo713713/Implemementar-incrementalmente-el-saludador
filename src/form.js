document.addEventListener("DOMContentLoaded", function() {
    // Simula la obtención de datos del usuario, como el nombre, sexo y edad
    const usuario = {
        nombre: null,
        sexo: null,
        edad: null,
        idioma: null
    };
    
    // Llena el formulario automáticamente
    document.getElementById("nombre").value = usuario.nombre || "";
    document.getElementById("sexo").value = usuario.sexo || "";
    document.getElementById("edad").value = usuario.edad || "";
    document.getElementById("idioma").value = usuario.idioma || "";

    // Escucha el evento de envío del formulario
    document.getElementById("wellcome-Form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        
        // Obtiene el nombre ingresado
        const nombreIngresado = document.getElementById("nombre").value;
        const sexoIngresado = document.getElementById("sexo").value;
        const edadIngresada = document.getElementById("edad").value;
        const idiomaIngresado = document.getElementById("idioma").value;
        // Muestra el saludo de bienvenida
        if(idiomaIngresado == "Español")
        {
            if(sexoIngresado == "Masculino")
            {
                if(edadIngresada<30)
                {
                    saludo = "Bienvenido joven "
                }
                else
                {
                    saludo = "Bienvenidopppp señor "
                }
            }
            else
            {
                if(edadIngresada<30)
                {
                    saludo = "Bienvenida señorita "
                }
                else
                {
                    saludo = "Bienvenida señora "
                }
            }
            mensaje = " a la pagina de la Cato"
        }
        else
        {
            if(sexoIngresado == "Masculino")
            {
                if(edadIngresada<30)
                {
                    saludo = "Welcome young "
                }
                else
                {
                    saludo = "Welcoem sir "
                }
            }
            else
            {
                if(edadIngresada<30)
                {
                    saludo = "Welcome miss "
                }
                else
                {
                    saludo = "Welcoem madam "
                }
            }
              mensaje = " to the Cato page"
        }
        alert(saludo + nombreIngresado +  mensaje)
    });
});
