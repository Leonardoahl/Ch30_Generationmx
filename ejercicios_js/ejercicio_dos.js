/*
    Ejercicio 2
    Write a function that:
         Takes in an array of numbers.
         Doubles the value of each number in the array.
         Prints out the new updated array.
    Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

function doubleValue(arr){
    for(let i = 0; i< arr.length; i++){
        arr[i]*=2; 
    }
    console.log(arr);
}

let arr = [1,2,4,5];
doubleValue(arr);


// Resolver con map

let arrMap = [1,2,4,5]

function doubleValueMap(arr){
    console.log(arr.map(x => x * 2));
}

doubleValueMap(arrMap);