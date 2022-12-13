'use strict'
//получем весь html
const htmlEl = document.documentElement;
//получаем body
const bodyEl = document.body;
console.dir(bodyEl);
//получаем контейнер с кнопками 
const buttons = document.querySelectorAll('.buttons');
console.log(buttons);
// получаем кажд кнопку
const buttonColor = document.querySelectorAll('.button');
console.dir(buttonColor);


//ьежим по кнопка вешаем событие на каждую 
buttonColor.forEach(but => {
   but.addEventListener('click', function() {
      //условие если кнопка содержит такой класс - присваиваем класс body
      if(but.classList.contains('red')) {
         bodyEl.className = 'color__red';
      } else if(but.classList.contains('green')) {
         bodyEl.className = 'color__green';
      } else if(but.classList.contains('blue')) {
         bodyEl.className = 'color__blue';
      } else if (but.classList.contains('yellow')) {
         bodyEl.className = 'color__yellow'
      }
   });
});




