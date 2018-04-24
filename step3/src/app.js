import { foo, bar } from './modules/fun';
import getHousesAndRender from './modules/get-houses';

if (module.hot) {
  module.hot.accept();
}

const header = document.querySelector('.header');
header.innerHTML = `<h1>Welcome to ${foo()}</h1>`;

$('.header').css({ 'font-family': 'sans-serif', 'color': 'lightblue' });

getHousesAndRender();