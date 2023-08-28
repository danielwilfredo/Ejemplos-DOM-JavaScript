/* Primero creamos una variable en donde 
se almacenara el elemento que queremos seleccionar
*/
const divElement = document.getElementById('miDiv');
 /*
 Seleccionamos el elemento por medio del metodo del DOM
 getElementById
 */
 /* 
 Por ultimo agregamos código HTML dentro del div seleccionado
 */
divElement.innerHTML = `<p>Este parrafo se agrego desde JavaScript utilizando 
 la propiedad innerHTML </p>`;


/* Codigo para obtener elementos por su clase */
const parrafos = document.getElementsByClassName('parrafo');
/*
Ya que al obtener más de un elemento, para poder acceder a cada uno
de los elementos que nos devuelve el metodo getElementsByClassName
debemos de iterar estos y lo podemos hacer por medio de un ciclo for
*/
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = 'red'
  parrafos[i].style.fontWeight  = 'bold';
}
//con el codigo anterior lo que estamos haciendo es accediendo
//a los elementos que guardamos en la variable parrafos y cambiando 
//la propiedad del style del color y el tamaño de letra

/*Seleccionamos los elementos y los guardamos en una variable*/
const listaItems = document.getElementsByTagName('li');
/*Al igual que el codigo anterior, el metodo 
getElementsByTagName tambien nos puede devolver más
de un elemento, por lo que volveremos a utilizar un ciclo for para 
recorrer los elementos que se nos estan devolviendo */
for (let i = 0; i < listaItems.length; i++) {
  listaItems[i].style.fontWeight = 'bold';
  listaItems[i].style.color = 'blue';
  listaItems[i].style.backgroundColor = 'grey';
}
//con el codigo anterior lo que estamos haciendo es accediendo
//a los elementos que guardamos en la variable listaItems y cambiando 
//la propiedad del style del color , el tamaño de letra 
//y el fondod del color de fondo del elemento

// Seleccionar todos los elementos con la clase "parrafo"
const parrafos2 = document.querySelectorAll('.parrafo');

// Iterar sobre la colección de elementos
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = 'green';
  parrafos[i].style.backgroundColor = '#000';
}
/*En este ejemplo, document.querySelectorAll('.parrafo')
 selecciona todos los elementos con la clase "parrafo" 
 utilizando un selector CSS. Luego, el bucle for 
recorre la colección de elementos seleccionados 
y cambia el color de texto de cada párrafo a azul.
y el color de fondo a negro */