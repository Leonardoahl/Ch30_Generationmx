/*
    Ejercicio 6
    Realizar algoritmo burbuja
    Entrada [3, 6, 12, 5, 100, 1 ]
    Salida [1, 3, 5, 6, 12, 100]
*/
let numbers = [3,6,12,5,100,1];

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr);

}

bubbleSort(numbers);