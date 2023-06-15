// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const divNumbers = document.querySelector(".numbers");

for (let i = 100; i >= 50; i--) {
  if (i % 10 == 0) {
    divNumbers.innerHTML += `<p> ${i} </p>`;
  }
};

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
const array = ["Tomas", "Anna", "Lana", "Maria", "Oleg"];
const divStrings = document.querySelector(".strings_container");
for (let i = 0; i < array.length; i++) {
  divStrings.innerHTML += `<p> ${array[i]} </p>`;
};

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const divUsers = document.querySelector(".users_container");
const cartaUserSection = document.querySelector("section");
const objects = [
  {
    fist_name: "Tomas",
    last_name: "Tomas_Last",
    age: 20,
  },
  {
    fist_name: "Anna",
    last_name: "Anna_Last",
    age: 25,
  },
  {
    fist_name: "Lana",
    last_name: "Lana_Last",
    age: 15,
  },
  {
    fist_name: "Maria",
    last_name: "Maria_Last",
    age: 35,
  },
  {
    fist_name: "Oleg",
    last_name: "Oleg_Last",
    age: 17,
  },
];
for (let i = 0; i < objects.length; i++) {
  if (objects[i].age >= 18) {
    divUsers.innerHTML += `<section> ${objects[i].fist_name} ${objects[i].last_name} ${objects[i].age} </section>`;
  }
};
