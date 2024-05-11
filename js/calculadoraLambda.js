
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

    //Declaración de arreglos 
    const diasSemana = ["lunes" , "martes","miercoles","jueves","viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[10]);

    diasSemana[5]="sabado";
    console.log(diasSemana[5]);
    diasSemana.push("domingo")
    console.log(diasSemana[6]);
    console.log(diasSemana);
    diasSemana.unshift("dias");
    console.log(diasSemana);

    const numerosPares=[2,4,6,8,10];
    console.log(numerosPares);

    const numerosImpares=[1,3,5,7,9];

    const numerosCompletos = numerosPares.concat(numerosImpares);
    console.log(numerosCompletos);

    //ForEach
    for(const dia of diasSemana){
        console.log(dia);
        if(dia === "viernes"){
            console.log("viernes y el cuerpo lo sabe");
        }
    
    }

    if(diasSemana[8]=== undefined){
        console.log("No existe el dia");
    }else{
        console.log("El dia existe");
    }

    // manejo de objetos 
    const estudiante ={
        nombre: "Francisco",
        apellido:"Chanataxi",
        edad: 23,
        cedula: 11754402707
    }
    console.log(estudiante);
    console.log(estudiante.nombre);

    estudiante.apellido = "Mancheno";
    console.log(estudiante);

    const profesor={
        nombre: "jose",
        apellido:"Mancheno",
        edad: 25,
        ciudadano: "Ecuatoriana",
        direccion:{
            callePrincipal: "12 de octubre",
            calleSecundaria:"la gasca",
            numero: 123,
            ciudad: "Quito",
            barrio:"la gasca"
        }
      
    }
    console.log(profesor );

    console.log(profesor.direccion);
    console.log(profesor.direccion.barrio)
    profesor.direccion.barrio = "Carapungo"
    console.log(profesor.direccion);

    //arreglo de Objetos
    const estu1={
        nombre:"fran",
        apellido:"chana"
    }
    const estu2={
        nombre:"fabricio",
        apellido:"chalco"
    }
    const estu3={
        nombre:"marco",
        apellido:"lopez"
    }
    const estudiantes = [estu1,estu2,estu3];
    console.log(estudiantes);
    console.table(estudiantes);
    console.log(estudiantes[1]);
    console.log(estudiantes[1].apellido);
    estudiantes[1].apellido = "Octavia Mercedes";
    console.table(estudiantes);

    const profesores = [
        {nombre: "francisco",
            apellido:"Chanataxi"
        },
        {nombre: "fabricio",
            apellido:"chalco",
            edad: 21
        },
    ]

    console.table(profesores);

    var profesorExcluido = profesores.pop();
    console.log(profesorExcluido);
    console.table(profesores)

    //Desestructuración de Arreglos

    const diasSemana2 = ["lunes" , "martes","miercoles","jueves","viernes"];
    const[d1,d2,d3,d4]= diasSemana2;
    console.log(d2);
    console.log(d4);
    console.table(diasSemana2);
    
    const[di1 ,di2,di3,di4]= ["lunes" , "martes","miercoles","jueves","viernes"];
    console.log(di2);
    console.log(di4);
       
    //desestructuración de objetos

    const vehiculo = {
        marca:"Toyota",
        modelo: "Hilux",
        anio: 2015
    }

    const {marca , anio} = vehiculo;
    console.log(marca);
    console.log(anio);

    const { modelo } ={
        marca:"Toyota",
        modelo: "corola",
        anio: 2000
    } 
 
    console.log(modelo);

    // desestructuracion de un objeto que tenga un atributop compuesto

    const celular = {
        marcaa:"Iphone",
        modeloo: "12 mini",
        anio: 2020,
        caracteristicas:{
            pantalla: "6.1",
            procesador: "A15",
            memoria: "4GB"
        }
    }
 
    const{caracteristicas } = celular;
    console.log(caracteristicas);

    const{ pantalla , procesador}= caracteristicas;
    console.log(pantalla);
    console.log(procesador);
}
/*
   //MANERA MAS RAPIDA

    const { marcaa , modeloo , caracteristicas:{pantalla , procesador}= celular;

    console.log(procesador);
    }
*/
