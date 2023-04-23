import './css/styles.css';
import { fetchCountries } from './helpers/fetchCountries';
import { createCountry } from './helpers/createCountry';
import { clearCountry } from './helpers/clearCountry';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.js-list');
const infoEl = document.querySelector('.country-info');



inputEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(evn) {

    const {target} = evn;

    if (!target.value.trim()) {
        clearCountry(listEl, infoEl);
        return
    }

    if(target.value.length < 2) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        clearCountry(listEl, infoEl);
        return
    }   

    fetchCountries(target.value).then(resp => {
        console.log(resp);
        if (resp.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.');
            clearCountry(listEl, infoEl);
            return
        }
        createCountry(resp, listEl, infoEl);
    }).catch(err => {
        if (err.message === '404') {
            Notify.failure('Oops, there is no country with that name');
        }
        clearCountry(listEl, infoEl);
        console.log(err)});
}

