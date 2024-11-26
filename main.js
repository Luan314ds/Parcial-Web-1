'use strict'
// Al oprimir el botón Agregar se debe cumplir a, b y c:
// a. Almacenar lo que introduce el usuario en una variable de tipo arreglo de objetos JSON.
// b. Mostrar un listado con los meses registrados y la ganancia neta de cada mes (resultado =
// ventas - gastos).
// c. Mostrar en el párrafo, el total de las ganancias menos el total de gastos de los datos
// cargados (ganancia neta total). Si la ganancia neta total es negativa se debe mostrar con un
// estilo resaltado en rojo y negrita.
// d. Escriba una función para mostrar por consola la cantidad de meses que los gastos
// superaron a las ventas.

//Nota: Asumir que solo se carga un registro de ventas y gastos por mes. No se cargan meses repetidos.

let registros = [];
let registro = [];

let btn = document.getElementById("btn-agregar");
btn.addEventListener("click", almacenar);


function almacenar(e) {
    e.preventDefault();//VERLO BIEN PARA QUE SIRVE
    let mes = document.querySelector("#mes").value
    let ventas = document.querySelector("#ventas").value
    let gastos = document.querySelector("#gastos").value

    console.log(mes, ventas, gastos)


    let registro = {
        "mes": mes,
        "ventas": ventas,
        "gastos": gastos
    }

    registros.push(registro)
    mostrar(registro);
}

function mostrar(registro) {
   
    let lista = document.querySelector("#lista");
    let parrafo = document.querySelector("#mensaje");

     lista.innerHTML = ""

    //con el += 
    lista.innerHTML += "<li>" + "Mes: " + registro.mes + "</li>" +
        "<li>" + "Ventas: " + registro.ventas + "</li>" +
        "<li>" + "Gastos: " + registro.gastos + "</li>" +
        "<li>" + "Ganancia neta: " + (registro.ventas - registro.gastos) + "</li>" +
        "________________"


    let gananciatotal = 0;
    for (let index = 0; index < registros.length; index++) {

        gananciatotal += registros[index].ventas - registros[index].gastos;
        parrafo.innerHTML = gananciatotal;
    }

    //CON UN FOR OF TAMBIEN SE PUEDE HACER, MENOS CODIGO
     // for (let item of registros) {
    //    gananciatotal +=  item.ventas -item.gastos;
    //    parrafo.innerHTML = gananciatotal;
    // }



    console.table(registros)


}

