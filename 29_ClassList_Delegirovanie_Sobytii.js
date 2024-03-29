'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length);//2
console.log(btns[0].classList.item(0));//blue

// Методы classList
console.log(btns[0].classList.add('red', 'eherhe', 'freddddy'));
// console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red') ) {
    console.log('red');
}
console.log(btns[1].classList.add('red'));
if (btns[1].classList.contains('red') ) {
    console.log('red');//red
}

btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    //     btns[0].classList.add('blue');
    // } else {
    //     btns[1].classList.remove('red');
    //     btns[0].classList.remove('blue');
    // }

    btns[1].classList.toggle('red');
});

console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON"){
        console.log('hello');
    }
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// Matches проверяет на совпадения

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")){
        console.log('hello');
    }
});
