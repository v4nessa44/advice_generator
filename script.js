"use strict"

let quoteEl = document.querySelector("h1") 
let btn = document.querySelector("button");

// const changeQuote = () => {
//     fetch("https://api.adviceslip.com/advice")
//     .then( (response)=>{
//     return response.json();
//     }).then( (data) =>{
//         quoteEl.innerHTML = data.slip.advice;
//     }).catch((error) => {
//         alert("API is not working!!");
//     });

// };

const changeQuote = async()=> {
try{
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    quoteEl.innerHTML = data.slip.advice;
    } catch(error){
        alert("Server Down");
    }
};

btn.addEventListener("click", changeQuote);