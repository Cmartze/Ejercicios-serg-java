/*
Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]

*/

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  // uso de la función con el array [3, 6, 12, 5, 100, 1].
  let inputArray = [3, 6, 12, 5, 100, 1];
  let sortedArray = bubbleSort(inputArray);
  console.log(sortedArray);
  