'use strict';

let car = {
   carManufacturer: 'China',
   carModel: 'Audi',
   yearProduct: 2019,
   averageSpeed: '120 km/h',
   volumeTank: '55L',
   fuelConsumption: '10L/100km',
   // 1  Метод, який виводить на екран інформацію про автомобіль.
   getFullinfo() {
      alert(` В наличии имеется автомобиль с такими параметрами :
      Производитель:    ${this.carManufacturer}
      Модель:           ${this.carModel}
      Год выпуска:      ${car.yearProduct} 
      Скорость:         ${this.averageSpeed}
      Обьем бака:       ${this.volumeTank} 
      Расход на 100км:  ${this.fuelConsumption} `);
   }
};
car.getFullinfo();
console.log(car);
//2.Додавання ім’я водія у список
let driver = Object.assign(car);

driver.name = 'Ivan';
alert(`Вы добавили водителя :  ${car.name}`);
console.log(car.name);

// 3. Перевірка водія на наявність його ім’я у списку
let nameDriver = prompt('please enter name driver');
if (nameDriver === 'Ivan') {
   alert(`Водитель с таким именем существует`)
} else {
   alert(`Такого водителя нет`);

}
console.log('name' in car);

// 4.Створити об'єкт, що описує час (години, хвилини, секунди)

let time = new Date().toLocaleTimeString();
alert(`Текущее время:  ${time}`);

let days = ["Восскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let date = new Date().toLocaleDateString();
let now = new Date();
alert(`Текущая дата:
${days[now.getDay()]}  ${date}`);


