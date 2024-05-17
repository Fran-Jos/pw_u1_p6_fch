var numero1 = '';
var numero2 = '';
var resultado = '';
var aplastoFuncion = false;


function funciones( id ){
    

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
    

};

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

    /*
    else{
        if(aplastoFuncion == true){
            numero2 = numero2.concat(n);
        }
       numero1 = numero1.concat(n);
    }

    console.log(numero1);
    console.log(numero2);
    */
}
