import { foo, bar } from './fun';

if (module.hot) {
  module.hot.accept();
}

const header = document.querySelector('.header');
// const header = document.createElement('div');
header.innerHTML = `<h1>Welcome to the world of ${foo()}</h1>`;
// document.body.appendChild(header);


$('.header').css({ 'color': 'lightblue', 'font-family': 'sans-serif' });
