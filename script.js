document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        // Aquí puedes agregar la lógica para enviar el formulario o realizar alguna acción con los datos.
        // Por ahora, solo mostraremos un mensaje en la consola.
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Mensaje:", mensaje);

        // Limpia el formulario después de enviarlo
        contactForm.reset();
    });
});
