
// DOM Manipulation 


const button1 =  document.querySelector("#changeTextButton");
console.log(button1);
button1.addEventListener("click",()=>{
 button1.textContent = "Clicked";
 
 button1.style.backgroundColor = "green";
 button1.style.color = "white";
button1.style.padding = "10px 20px 10px 20px";
button1.style.borderRadius = "5px";
  const introParagraph= document.querySelector("#intro");
  introParagraph.textContent = "This is a modified paragraph.";
})
 

const button2  =  document.querySelector("#addElementButton");

button2.addEventListener("click",()=>{
 
   const newElement = document.createElement("div")
   
   const button = document.createElement("button")
   button.textContent = "Click Me";


   button.classList.add('button3')
   newElement.textContent = "This is a new paragraph element hello dnfhurflrf eurfhfjr uefjd.";
   newElement.style.padding = "10px 20px 10px 20px";
   newElement.style.fontSize = "20px";



 const containerDiv =  document.querySelector(".container");

 containerDiv.append(newElement);
 containerDiv.append(button);

})




const highlightButton = document.querySelector("#highlightButton");
highlightButton.addEventListener("click", () => {
  const introParagraph= document.querySelector("#intro");
    introParagraph.classList.toggle("highlight");
});



const removebtn = document.querySelector("#removeElementButton");

removebtn.addEventListener("click", () => {
  const containerDiv =  document.querySelector(".container");
  containerDiv.removeChild();
});



