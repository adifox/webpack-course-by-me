import template from '../templates/template.hbs';

function getHousesAndRender() {
  $.get('https://anapioficeandfire.com/api/houses/', (data) => {
    _render({ house: data });
  });
}

export default getHousesAndRender;

/* Private */

function _render(data) {
  const el = document.querySelector('.got-data');
  el.innerHTML = template(data);
}

