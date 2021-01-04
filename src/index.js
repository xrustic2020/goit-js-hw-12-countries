import './styles.css';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';

import refs from './scripts/refs';
import handler from './scripts/handler';

refs.input.addEventListener('input', debounce(handler, 500));
