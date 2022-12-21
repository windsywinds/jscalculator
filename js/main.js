'use strict'

//acquires the user entered values in the input forms 
const userInput1 = document.querySelector(".input1");
const userInput2 = document.querySelector(".input2");


document.querySelector(".addition").addEventListener("click", (e)=>{
    let sum = Number(userInput1.value) + Number(userInput2.value);   
    document.querySelector(".output").innerHTML = `${Number(userInput1.value)} + ${Number(userInput2.value)} = ${sum}`;
});
document.querySelector(".subtraction").addEventListener("click", (e)=>{
    let sum = Number(userInput1.value) - Number(userInput2.value);
    document.querySelector(".output").innerHTML = `${Number(userInput1.value)} - ${Number(userInput2.value)} = ${sum}`;
});
document.querySelector(".multiply").addEventListener("click", (e)=>{
    let sum = Number(userInput1.value) * Number(userInput2.value);
    document.querySelector(".output").innerHTML = `${Number(userInput1.value)} * ${Number(userInput2.value)} = ${sum}`;
});
document.querySelector(".divide").addEventListener("click", (e)=>{
    let sum = Number(userInput1.value) / Number(userInput2.value);
    document.querySelector(".output").innerHTML = `${Number(userInput1.value)} / ${Number(userInput2.value)} = ${sum}`;
});
document.querySelector(".modulo").addEventListener("click", (e)=>{
    let sum = Number(userInput1.value) % Number(userInput2.value);
    document.querySelector(".output").innerHTML = `${Number(userInput1.value)} % ${Number(userInput2.value)} = ${sum}`;
});
document.querySelector(".clear").addEventListener("click", (e)=>{ //function will clear the input boxes and also the answer currently shown
    document.querySelector(".output").innerHTML = "";
    document.getElementById("form1").value = "";
    document.getElementById("form2").value = "";
});
document.querySelector(".close").addEventListener("click", (e)=>{ //function replaces everything within the div "calculator" with a message and reload button
    document.querySelector(".calculator").innerHTML = `<p>Thanks for using the calculator!</p><div class="reload"><button class="reload-button" onclick="reloader()">Reload</button></div>`;
});

