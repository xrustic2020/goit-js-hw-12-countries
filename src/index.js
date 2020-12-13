import './styles.css';
import fetchCountries from './scripts/fetchCountries';
import debounce from 'lodash.debounce';
import countryTpl from './templates/country.hbs'

const refs = {
  input: document.querySelector('.searching__input'),
  content: document.querySelector('.content'),
};

refs.input.addEventListener('input', debounce(handler, 500));

function handler(evt) {
  const value = evt.target.value;
  fetchCountries(`${value}`).then(response => {
    console.log(countryTpl(response));
    refs.content.innerHTML = countryTpl(response);

  });
};

// console.log(refs.content);
