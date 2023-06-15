// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
let min = 0;
let max = 0; 

function print_numbers(n, m) {
  for (let i = m; i >= n; i--) {
    if(n < m) {
      min += n
    }else {
      max += m
    } 
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
print_numbers(2, 10);

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(num1) {
  let calc = num1 ** 2;
  console.log(calc);
}
power(5);

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function print_number(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    //console.log(sum);
  }
  return sum;
}
console.log(print_number(4));

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function show_numbers(n, m) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = n; i <= m; i++) {
    if (i % 2 == 0) {
      sum1 += i;
    }
    if (i % 2 == 1) {
      sum2 += i;
    }
  }
  console.log(sum1, sum2);
}
show_numbers(2, 6);
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'//

function print_long_string(array) {
  if (array.length > 0) {
    let long_word = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i].length > long_word.length) {
        long_word = array[i];
      }
    }
    return long_word;
  } else {
    return null;
  }
}
console.log(print_long_string(["one", "two", "three"]));
