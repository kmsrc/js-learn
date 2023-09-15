// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
'use strict';

function pow(x, n) {
  
  let result = x;
  
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  
  return result;
}

let x = prompt('Введите x', 0);
let n = prompt('Введите степень', 1);

if (n >= 1 && n % 1 == 0) {
  alert(`Ответ: ${pow(x, n)}`);
} else {
  alert('используйте натуральное число n');
}