document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // evita recarga

        const payload = {
            nombre: document.getElementById("nombre").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            verificacionPassword: document.getElementById("verificacionPassword").value
        };

        try {
            const resp = await fetch("http://localhost:8080/api/usuarios/registrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!resp.ok) {
                const error = await resp.text();
                alert("Error: " + error);
                return;
            }

            // si todo OK → redirige
            window.location.href = "registro-exitoso.html";

        } catch (err) {
            console.error(err);
            alert("Ocurrió un error");
        }
    });

});
