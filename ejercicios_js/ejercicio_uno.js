/*
Ejercicio 1
Complete the function to print out the string: This is a sentence.
*/

// manera basica de resolver
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    let str ="";
    for(let i = 0; i< arr.length; i++){
        // La condición verifica que el indice este en la ultima posicion del array, para ya no ingresar un espacio extra al final
        if(i==arr.length-1){
            str+= arr[i];
        }else{
            str+= arr[i] + " ";
        }
        
    }
    console.log(str);
}
printOutString();

// resolver con join
function printOutStringJoin(){
    console.log(arr.join(' '));
}

printOutStringJoin();

