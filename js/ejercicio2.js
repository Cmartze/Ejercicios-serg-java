/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

function doubleNumbers(arr) {
    // Utilizamos el método map() para iterar sobre cada elemento del array
    // y devolver un nuevo array con el valor de cada elemento duplicado.
    let doubledArray = arr.map(num => num * 2);
  
    // Imprimimos el nuevo array actualizado.
    console.log(doubledArray);
  }
  
  // Ejemplo de uso de la función con el array [1, 2, 4, 5].
  doubleNumbers([1, 2, 4, 5]);
  