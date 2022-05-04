function login() {
    //evaluar usuario y contraseña con alter mandar mensaje si ha sido correcto
    //si usuario ucs password=123
    mi_usuario = document.getElementById('user');
    micontraseña = document.getElementById('contra');
    
    
    if (mi_usuario.value == "Adrian" && micontraseña.value == "123") {
        alert("¡Bienvenido "+mi_usuario.value+"!");
       
    } else {
        alert("Credenciales Incorrectas");
    }
}

