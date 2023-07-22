/*
    Ejercicio 3
    Write a program to compute the sum and product (multiplication) of an array of
    numbers. Print out the sum and the product.
    Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let numbers = [1,2,3,4];

function addition (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function multiplication (arr){
    let mult = 1;
    for (let i = 0; i < arr.length; i++){
        mult *= arr[i];  
    }
    return mult;
}

function printOperations(arr){
    let sum = addition(arr);
    let mult = multiplication(arr);
    const text = "La suma es: " + sum + " \nLa multiplicación es: " + mult; 
    console.log(text);
}

printOperations(numbers);

// Utilizando reduce

function printOpReduce(arr){
    const text = "La suma con reduce es: " + arr.reduce(sumReduce) + " \nLa multiplicación con reduce es: " + arr.reduce(multReduce); 
    console.log(text);
}

function sumReduce(total, num){
    return total + num;
}

function multReduce(total,num){
    return total * num;
}

printOpReduce(numbers);