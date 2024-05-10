
const sumar=(idn1 , idn2)=>{
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) + parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;
}
const restar=(idn1 , idn2)=>{
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) - parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;
}
const dividir=(idn1 , idn2)=>{
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) / parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;
}
const multiplicar=(idn1 , idn2)=>{
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) * parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;
}

function agregarElemento(){
    document.getElementById('idDivision').innerHTML="<button>NUEVO</button>";

} 

function quitarElemento(){
    document.getElementById('idDivision').innerHTML="";

} 

function conceptosJS(){
    /* TIPOS de variables / Datos javaScript */
    /* let , var , const*/

    /*const --> es para constante no se puede modificar ya que es una constante*/ 
    const IVA=15;
    console.log(IVA);


    /* var --> es una variable asi que esta si se puede modificar*/
    var nombre= "Francisco";
    console.log(nombre)
    nombre = "Jose";
    console.log(nombre);
    
    /* let --> es una variable que se puede modificar , es mas eficiente que var*/
    let apellido = "Chanataxi";
    console.log(apellido);
    apellido = "Mancheno";
    console.log(apellido)
}