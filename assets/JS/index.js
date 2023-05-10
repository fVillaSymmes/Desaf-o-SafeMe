const nombrecito = document.getElementById("nombre")
const mail = document.getElementById("mail")
const job = document.getElementById("job")
const tel = document.getElementById("tel")
const aboutYou = document.getElementById("sobreTi")

const nombrecitoTarjeta = document.getElementById("nombrecitoTarjeta")
const trabajoTarjeta = document.getElementById("trabajoTarjeta")
const mailTarjeta = document.getElementById("mailTarjeta")
const telefonoTarjeta = document.getElementById("telefonoTarjeta")
const sobreMiTarjeta = document.getElementById("sobreMiTarjeta")

const boton = document.getElementById("boton")

function Formulario(nombre, correo, trabajo, telefono, sobreTi) {
    this.nombre = nombre;
    this.correo = correo;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.sobreTi = sobreTi;
}
//DUDAS: ERA NECESARIO APLICAR MÉTODOS EN EL CONSTRUCTOR DE OBJETOS PARA RESOLVER ESTE DESAFÍO?
//O ESTÁ BIEN PROCEDER A TRAVÉS DE FUNCIONES EXTERNAS?
function botonero() {
    (nombrecito.value != "" && mail.value != "" && job.value != "" && tel.value != "" && aboutYou.value != "") ? crearYDesplegar() : alert("Rellena todos los campos")
}

function crearYDesplegar () {
    const usuario = new Formulario(nombrecito.value, mail.value, job.value, tel.value, aboutYou.value);
    nombrecitoTarjeta.innerHTML = usuario.nombre
    mailTarjeta.innerHTML = usuario.correo
    trabajoTarjeta.innerHTML = usuario.trabajo
    telefonoTarjeta.innerHTML = usuario.telefono
    sobreMiTarjeta.innerHTML = usuario.sobreTi
}

boton.addEventListener("click", botonero)