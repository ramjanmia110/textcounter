let textArea =document.getElementById("text-input");
let characters =document.getElementById("char-count");
let words =document.getElementById("word-count");
let button =document.getElementById("btn");



textArea.addEventListener('input',()=>{
    let text =textArea.value;
    let character =text.length;
    let word =text.trim().split(/\s+/).filter(item => item).length;

    characters.textContent =character;
    words.textContent =word;
})

button.addEventListener('click',()=>{
    textArea.value ="";
    characters.textContent ="0";
    words.textContent ="0";
})