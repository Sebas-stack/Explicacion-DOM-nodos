// seleccionar etiquetas
// por nombre de etiqueta
// forma nueva -> querySelector();
// forma antigua -> getElementByTagname();

// POR NOMBRE DE ETIQUETA

// FORMA NUEVA
// let titulo = document.querySelector("h1");
// titulo.textContent="Hi boys"
// console.log(titulo);

// FORMA VIEJA 
// let titulo = document.getElementsByTagName("h1")[0];
// titulo.textContent="Hi boys"
// console.log(titulo);


// seleccionar por nombre de clase 

// let titulo = document.querySelector(".titulo");
// titulo.style.color = "red";
// titulo.textContent="Hi boys";
// console.log(titulo);
 
// forma vieja seleccionar de forma vieja 
// let titulo = document.getElementsByClassName(".titulo");
// titulo[0].style.color = "red";
// console.log(titulo)

// seleccionar por id 
// forma nueva 

// let titulo = document.querySelector("titulo");
// titulo.style.backgroundColor = "red";
// titulo.textContent="Hi boys";
// console.log(titulo);

// forma vieja
// let titulo = document.getElementById("titulo");
// titulo.style.backgroundColor = "red";
// titulo.textContent="Hi boys";
// console.log(titulo);

// seleccionar una una etiqueta dentro de otra 
// let span = document.querySelector("h1 span");
// span.style.color = "red";

// selecciona varias etiquetas 
//  let ps = document.querySelectorAll("p");

// for(let x=0; x <ps.length; x++){
//     ps[x].style.color = "purple";
// }
// ps.forEach((p)=>{
//     p.style.color = "purple";

// });

// CREAR ETIQUETAS / formar corta

// let enlace = document.createElement("a");
// enlace.textContent="Ir a youtube";
// enlace.href ="https://youtube.com";
// enlace.target = "-black";
// enlace.className ="enlace"  //Agg una clase para modificarlo en 
// // ETIQUETA DE REFERENCIA 
// let body = document.body;
// //Agregar el enlace al HTML
// body.appendChild(enlace);

// CREAR ETIQUETAS / formar larga
// let enlace = document.createElement("a");
// let textoEnlace = document.createTextNode("Ir a youtube");
// enlace.appendChild(textoEnlace);  //agg texto al enlace
// enlace.setAttribute("href","https://youtube.com");
// enlace.setAttribute("target","_blank");
// // ETIQUETA DE REFERENCIA 
// let body = document.body;
// body.appendChild(enlace);

// Como borrar una etiqueta 
// enlace.removeAttribute("href");  // quita el atributo href
//enlace.remove();  // quita la etiqueta del html

// Reemplazar o modificar una etiqueta 
// let p = document.createElement("p");
// p.textContent = "Soy otro parrafo";
// enlace.replaceWith(p);


//Ubicr una etiqueta en cualquier lado 
// Metodo inserBefore 
// metodo insertAfter()
// metodo insertAbjacentElement ()

// ps[0].insertAdjacentElement("afterend",p);


// MANIPULAR CLASES DE CSS 

let p = document.querySelector("p.parrafo1");
// agg una clase de css 
p.classList.add("fondo","letra");
// quita una clase de css
// p.classList.remove("letra");

// agg o quitar clases de css 
// p.classList.toggle("letra") 

// reemplazar una clase 
p.classList.replace("fondo","enlace");

// Comprobar si existen o no una clase en la etiqueta
let existeClase = p.classList.contains("fondo");
console.log("la p tiene fondo "+existeClase);
