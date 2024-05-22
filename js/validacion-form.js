const formRegister = document.querySelector("#formRegister");

const validarForm = (event) =>{
    event.preventDefault();
    
    const name = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const password = document.querySelector("#contraseña");
    const fecha = document.querySelector("#fecha-nacimiento");
    const fecha_label = document.querySelector("#birth_date");
    const terminos = document.querySelector("#terminos");
    const preferencias = document.querySelector("#contenido");
    let validacion = true;

    // Nombre
    if (name.value.trim() === ""){
        // alert("El campo del nombre no debe estar vacío");
        name.classList.add("error");
        document.querySelector("#error-name").textContent = "Debe completar el campo Nombre";
        document.querySelector("#error-name").classList.add("error-message");
        validacion = false;
    } else {
        name.classList.remove("error");
        document.querySelector("#error-name").textContent = "";
        document.querySelector("#error-name").classList.remove("error-message");
    }

    // Email
    if (email.value.trim() === ""){
        // alert("El campo del nombre no debe estar vacío");
        email.classList.add("error");
        document.querySelector("#error-email").textContent = "Debe completar el campo Email";
        document.querySelector("#error-email").classList.add("error-message");
        validacion = false;
    } else {
        email.classList.remove("error");
        document.querySelector("#error-email").textContent = "";
        document.querySelector("#error-email").classList.remove("error-message");
    }

    // Password
    if (password.value.trim() === ""){
        // alert("El campo del nombre no debe estar vacío");
        password.classList.add("error");
        document.querySelector("#error-password").textContent = "Debe completar el campo Contraseña";
        document.querySelector("#error-password").classList.add("error-message");
        validacion = false;
    } else if(password.value.length < 6 || password.value.length > 12){
        password.classList.add("error");
        document.querySelector("#error-password").textContent = "La contraseña debe tener entre 6 y 12 caracteres";
        document.querySelector("#error-password").classList.add("error-message");
        validacion = false;
    } else{
        password.classList.remove("error");
        document.querySelector("#error-password").textContent = "";
        document.querySelector("#error-password").classList.remove("error-message");
    }

    // Preferencias
    if (preferencias.value.trim() === ""){
        preferencias.classList.add("error");
        validacion = false;
    } else{
        preferencias.classList.remove("error");
    }

    // Fecha
    if (fecha.value.trim() === ""){
        fecha.classList.add("error");
        fecha_label.style.color = "red";
        validacion = false;
    } else{
        fecha.classList.remove("error");
        fecha_label.style.color = "#b3b3b3"; 
    }

    // Términos y condiciones
    if (!terminos.checked){
        document.querySelector("#error-terminos").textContent = "Debe aceptar los términos y condiciones";
        document.querySelector("#error-terminos").classList.add("error-message");
        validacion = false;
    } else{
        document.querySelector("#error-terminos").textContent = "";
    }


    if(validacion){
        formRegister.submit();
    } else{
        return false;
    }

}

formRegister.addEventListener("submit", validarForm);