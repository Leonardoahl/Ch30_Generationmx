function changeName(){
    const newName = prompt("Cual es tu nombre?")
    document.getElementById("Name").innerHTML = "Hola " + newName;
}