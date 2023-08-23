const arrayToHundo = Array.from(Array(101), (_,x) => x);
console.log(arrayToHundo);
let start = 0;
let end = arrayToHundo.length-1;

const num = 100;
let found = false;
let counter = 0;

while(start<=end){
    let mid = Math.floor((start + end) / 2); //cut the array in half
    counter++;// up the counter
    if(arrayToHundo[mid] === num){ //check if number is present at mid
        found = true;
        console.log(arrayToHundo[mid]);
        break;
    }else if(arrayToHundo[mid] < num){ // else look in left or right accordingly
        start = mid + 1;
    }else{
        end = mid - 1;
    }
}

if(found){
    console.log("found");
    
}
console.log(counter);