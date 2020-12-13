import './styles.css';
import fetchCountries from './scripts/fetchCountries';

import debounce from 'lodash.debounce';

const refs = {
  input: document.querySelector('.searching__input'),
};

fetchCountries('united').then(response => console.log(response));
console.log(refs.input);

refs.input.addEventListener('input', handler);

function handler() { 
  console.log(refs.input.value);
};
