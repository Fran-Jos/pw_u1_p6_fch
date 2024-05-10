function sumar(idn1 , idn2){
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) + parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;
}
function sumar1(){
    var n1 = document.getElementById('idn1').value;
    var n2 = document.getElementById('idn2').value;
}
function restar(idn1 , idn2){
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) - parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;

}
function dividir(idn1 , idn2){
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) / parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;

}
function multiplicar(idn1 , idn2){
    var n1 = document.getElementById(idn1).value;
    var n2 = document.getElementById(idn2).value;
    var resultado = parseInt(n1) * parseInt(n2);
    console.log(resultado);
    document.getElementById('idResultado').innerText = resultado;

}