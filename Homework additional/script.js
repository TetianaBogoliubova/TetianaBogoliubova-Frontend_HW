// 1.Напишите функцию, которая проверяет, отрицательное число или нет (возвращает true/false).
function true_false(number) {
  if (number < 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}
true_false(-9);

// 2. Запросить у пользователя произвольное число и вывести его, если последняя цифра, на которую оно заканчивается, равна 8.
function title() {
  const num = +prompt("Введите число");
  if (num % 10 == 8) {
    console.log(num);
  }
}

// 3. Описать массив (набор) трех пользователей со след/характеристиками возраст, з/п, email и вывести возраст последнего (в наборе) пользователя.
function title() {
  const users = [
    {
      age: 25,
      pay: 20000,
      email: "useremail_1",
    },
    {
      age: 35,
      pay: 30000,
      email: "useremail_2",
    },
    {
      age: 45,
      pay: 40000,
      email: "useremail_3",
    },
  ];
  console.log(users[2].age);
}

// 4. Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел

function printArrayElements(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      arr.push(array[i]);
      console.log(arr);
    }
  }
}
printArrayElements([2, 4, -6, -7, 9]);

// 5. Запросить у сотрудника (логичистической компании) `ко-во часов полета` транспортного средства (самолета) и вывести время, в которое он вернется назад
function title() {
  const flight1 = +prompt("В котором часу Вы вылетаете");
  const flight2 = +prompt("Количество часов в полете");
  let sum = flight1 + flight2;
  let calc = sum % 24;
  console.log(`Время Вашего возвращения ${calc}.00`);
}

// 6. Написать функцию, которая принимает два числа в качестве диапазона и возвращает сумму нечетных чисел в указанном диапазоне

function printSumma() {
  const num1 = +prompt("Введите первое число");
  const num2 = +prompt("Введите второе число");
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(printSumma());

// 7. Написать функцию, которая принимает товары (массив объектов) и возвращает строку `Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR`
const list = [
  {
    name: "Iphone 13",
    price: 10000,
  },
  {
    name: "Iphone 14",
    price: 20000,
  },
  {
    name: "Iphone 15",
    price: 30000,
  },
];
function print_max_cost(list) {
  let max;
  let min = list[0].price;
  for (let i = 0; i < list.length; i++) {
    if (list[i].price > min) {
      min = list[i].price;
    } else {
      max = list[i].price;
    }
  }
  //return max;
  console.log(max);
}
console.log(print_max_cost(list));
for (let i = 0; i < array.length; i++) {
  let max = Math.max.apply(array[i].price);
  console.log(max);
}

// }
// print_max_cost([1000, 2000, 3000])
//         let max = Math.max.apply(null, array);
//         console.log(max)
//     } - пробовала с помощью этой функции вывести сначала большую цену. Также пробовала другие подходы, но пока решить эту задачу не получилось. Буду продолжать решать.

// 8. Написать программу, которая описывает массив двух игроков, со след/полями: `имя_пользователя`, `ущерб` и сравнивает их `ущерб` между собой (у кого шансов на победу больше)

function calc_max_damage(player) {
  let players = [
    {
      username: "Player_1",
      damage: 75,
    },
    {
      username: "Player_2",
      damage: 50,
    },
  ];

  if (players[0].damage < players[1].damage) {
    console.log(`Больше шансов у ${players[0].username}`);
  }
  if (players[0].damage > players[1].damage)
    console.log(`Больше шансов у ${players[1].username}`);
}
