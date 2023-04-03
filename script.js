// SELECION DE CONTENEDOR Y FORMULARIO

const contenedor = document.querySelector('#contenedor-formulario');
const formulario = contenedor.querySelector('#formulario');


// SELECCION DE BOTONES

const next1 = formulario.querySelector('#next1');
const next2 = formulario.querySelector('#next2');
const prev1 = formulario.querySelector('#prev1');
const prev2 = formulario.querySelector('#prev2');
const submit = formulario.querySelector('#submit');


// FUNCIONES DE LOS BOTONES

next1.addEventListener('click',()=>{
    formulario.style = 'margin-left: -100%';
})

next2.addEventListener('click',()=>{
    formulario.style = 'margin-left: -200%';
})

prev1.addEventListener('click',()=>{
    formulario.style = 'margin-left: 0%';
})

prev2.addEventListener('click',()=>{
    formulario.style = 'margin-left: -100%';
})

submit.addEventListener('click',()=>{
    alert('Datos cargados exitosamente');
})