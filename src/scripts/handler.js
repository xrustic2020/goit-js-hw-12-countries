import refs from './refs';
import fetchCountries from './fetchCountries';
import notification from './notification';
import { error, info } from '@pnotify/core';
import oneCountryTpl from '../templates/country.hbs';
import countrysTpl from '../templates/countrys.hbs';

export default function handler(evt) {
  refs.content.innerHTML = '';
  refs.content.classList.remove('background');
  const value = evt.target.value;
  fetchCountries(`${value}`)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject('Nothing found, please try again');
      }
    })

    .then(response => {
      const quantityResult = response.length;

      if (quantityResult > 9) {
        notification(
          error,
          'Too many matches found. Please enter a more specific query.',
        );
        return;
      }

      if (quantityResult > 1 && quantityResult < 9) {
        refs.content.innerHTML = countrysTpl(response);
        refs.content.classList.add('background');
        return;
      }

      refs.content.innerHTML = oneCountryTpl(response);
      refs.content.classList.add('background');
    })
    .catch(err => notification(info, err))
    .finally(() => {
      evt.target.value = '';
    });
}
