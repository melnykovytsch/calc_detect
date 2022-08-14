//калькулятор дальности обнаружения



function calcDetect() {

//характеристики исследуемой техники
let x; //обзор исследуемой техники
let y; //маскировка исследуемой техники

//характеристики техники врага
let x2; //обзор техники врага
let y2; //маскировка техники врага

let result1;
let result2;

x = document.getElementById('tank3aX').value; //получаем значение из елемента страницы с ID- tank3aX
y = document.getElementById('tank3aY').value; //получаем значение из елемента страницы с ID- tank3aY
x2 = document.getElementById('tank4bX2').value; //получаем значение из елемента страницы с ID- tank4bX2
y2 = document.getElementById('tank4bY2').value; //получаем значение из елемента страницы с ID- tank4bY2

result1 = x - (((x - 50) * y2) / 100); //дальность обнаружения техники врага
result2 = x2 - (((x2 - 50) * y) / 100); //дальность обнаружения исследуемой техники

document.getElementById('tank3aResult1').innerHTML = result1; //выводим значение переменной result1 в елемент страницы с ID- tank3aResult1
document.getElementById('tank4bResult2').innerHTML = result2; //выводим значение переменной result2 в елемент страницы с ID- tank4bResult2

/*
function changeColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
   
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
  }
*/

};

/*
const changeToFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
   
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
  }

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(imgElement);
}
*/

//calcDetect();

//console.log(result1 + ' - дальность обнаружения техники врага');
//console.log(result2 + ' - дальность обнаружения исследуемой техники');
