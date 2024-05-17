
var numero1 = '';
var numero2 = '';
var resultado = '';
var aplastoFuncion = false;

function funciones( id ){
    
    if("idSuma" == id || "idResta" == id || "idMulti" == id || "idDivision" == id || "idIgual" == id || "idC" == id){
        console.log("vas a operar");
        aplastoFuncion = true;

    }
    else{
        aplastoFuncion = true;
    }

  
    if("idSuma" == id){
        console.log("vas a sumar");
       aplastoFuncion = true;
       resultado = parseInt(numero1) + parseInt(numero2);
       console.log(numero1);
       console.log(numero2);         
    }  
    else if("idResta"== id ) {
        console.log("vas a restar");
        aplastoFuncion = true;
        resultado = parseInt(numero1) - parseInt(numero2);
    }
    else if("idMulti" == id) {
        console.log("vas a multiplicar");
        aplastoFuncion = true;
    }
    else if("idDivision" == id){
        console.log("vas a division");
        aplastoFuncion = true;
    }
    else if("idIgual"== id) {
        console.log("operar");
        aplastoFuncion = true;
        funciones("idSuma");
        console.log(resultado);
    }
    else if ("idC"== id) {
        console.log("vas a recetiar");
        aplastoFuncion = true;
    }else{
        aplastoFuncion = false;
    }
}   


function fran(id){
    if(numeroVacio(numero1)== false && numeroVacio(numero2)== false){ 
        if("idSuma" == id){
            resultado = parseInt(numero1) + parseInt(numero2);
        }else if("idResta"== id ) {
            resultado = parseInt(numero1) - parseInt(numero2);
        }else if("idMulti" == id) {
            resultado = parseInt(numero1) * parseInt(numero2);
        }else if("idDivision" == id){
            resultado = parseInt(numero1) / parseInt(numero2);
        }else if("idIgual"== id) {
            console.log("operar");
            console.log(resultado);
        }else if ("idC"== id) {
            numero1 = '';
            numero2 = '';
            resultado = '';
            console.log("vas a recetiar");
        }
    }else{
        console.log("No hay numeros");
    }
}


function numeroVacio(n){
    if (n == '') {
       true;
    }else{
       false;
    }
}

function registrarNumero(n){
    if (numeroVacio(numero1) || aplastoFuncion == false) {
        numero1 = numero1.concat(n);
        
    }else if(aplastoFuncion == true ) {
        numero2 = numero2.concat(n);
    }
    console.log(numero1);
    console.log(numero2);
    mostrarResultado();

}

function mostrarResultado(){
    document.getElementById('idDisplay').innerText = numero1;
}


/*
let esperandoSegundoNumero = false;
let n1 = '';
let n2 = '';
let resultado = '';

function funciones(id) {
    if (id === 'idSuma' || id === 'idResta' || id === 'idMulti' || id === 'idDivision' || id === 'idIgual' || id === 'idC') {
        esperandoSegundoNumero = true;
       
    }

    if (numeroVacio(n1) == false && numeroVacio(n2) == false) {
        haceroperacion(id);
    }
   
}

function haceroperacion(id) {
    if (id === 'idSuma') {
        resultado = parseInt(n1) + parseInt(n2);
    } else if (id === 'idResta') {
        resultado = parseInt(n1) - parseInt(n2);
    } else if (id === 'idMulti') {
        resultado = parseInt(n1) * parseInt(n2);
    } else if (id === 'idDivision') {
        resultado = parseInt(n1) / parseInt(n2);
    } else if (id === 'idIgual') {
        console.log(resultado);
    } else if (id === 'idC') {
        n1 = '';
        n2 = '';
        resultado = '';
    }
    console.log(resultado);
}


function registrarNumero(numero) {
    if (esperandoSegundoNumero) {
        n2 += numero;
    } else {
        n1 += numero;
    }
    console.log(n1);
    console.log(n2);
   
}


function numeroVacio(n) {
    if (n == '') {
        true;
    } else {
        false;
    }
}
function mostrarResultado(){
    document.getElementById('idDisplay').innerText = numero1;
}
*/