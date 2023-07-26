/*
    Ejercicio 5
    1. Write a command that prints out all of the people in the list.
    2. Write the command to remove &quot;Dani&quot; from the array.
    3. Write the command to remove &quot;Juan&quot; from the array.
    4. Write the command to move &quot;Luis&quot; to the front of the array.
    5. Write the command to add your name to the end of the array.
    6. Using a loop, iterate through this array and after console.log &quot;Maria&quot;, exit
    from the loop. (usar break)
    7. Write the command that gives the indexOf where &quot;Maria&quot; is located.
    At the end of the exercise, there should be 4 people in the array.
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people); 
people.splice(people.indexOf("Dani"),1);                        //remove Dani
people.splice(people.indexOf("Juan"),1);                        //remove Juan
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);       // Move Luis to the front
people.push("Leonardo");                                        // add my name
for (let i = 0; i < people.length; i++){                        //log until Maria is printed
    console.log(people[i]);
    if(people[i] == "Maria") break;
}
console.log(people.indexOf("Maria"));                           // index of Maria
console.log("Hay " + people.length + " personas en el array");  //check if there are only 4 left in the array
console.log(people);    