// crear una funcion pedirArrayUsuario -> la funcion debe pedir un numero o la letra 'q' para salir, cuando el usuario ingrese 'q' la funcion debe devolver un array con todos los numeros ingresados

function pedirArrayUsuario(){
    let numeros2=[];
    let num;    
    do{
        num=prompt("ingrese los numeros que desee o la letra q para terminar")
        if (num!=="q"){
            num= parseInt(num);
            numeros2.push(num);
        }
    }while(num !== "q")
    return numeros2;
}




// -crear una funcion calcularNumeroMagico -> la funcion recibe un array y devuelve un numero. ese numero se calcula de la siguiente 
// //manera. si hay mas numeros pares se devuelve la suma de todos los integrantes, si hay mas numeros impares de devuelve la resta


function calcularNumeroMagico(numeros){
    
    let contadorPar=0
    let contadorImpar=0
    numeros.forEach(function (numero){
        
        if (numero%2 == 0){
            contadorPar = contadorPar + 1
        }else{
            contadorImpar = contadorImpar + 1
        }
    })
    if (contadorPar > contadorImpar){
        let valorInicial=0;
        let sumaa= numeros.reduce(function(acumulador, valorActual){
            acumulador= acumulador + valorActual;
            return acumulador;
        },valorInicial)
        return sumaa;
    }else if(contadorImpar > contadorPar){
        let valorInicial=(numeros[0]*2);
        let resta= numeros.reduce(function(acumulador, valorActual){
            acumulador= acumulador - valorActual;
            return acumulador;
        },valorInicial);
        return resta;
    }
}




// crear una funcion llamada main: la funcion main llama a la funcion pedirArrayUsuario guarda el resultado de la funcion y se la pasa a la funcion calcularNumeroMagico, guarda el resultado de calcularNumeroMagico y lo muestra con un alert.


function main(){
    array= pedirArrayUsuario();
    alert(calcularNumeroMagico(array));

}

main();