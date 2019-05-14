// This will get the link tag in ythe body element
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);
// Creating Node Method
let newParagraph = document.createElement('p');
newParagraph.textContent  = 'I have just been created using a javascript DOM';
let newP = document.getElementById('selfie');
newP.appendChild(newParagraph);
//console.log(newParagraph);

// Insert before method 
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);

// Styling using JavaScript
let para = document.getElementById('para');
console.log(para.style.color);
para.style.color = "blue";
