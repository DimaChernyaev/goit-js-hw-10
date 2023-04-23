export function fetchCountries(name) {
    
    const BASE_URL = 'https://restcountries.com/v3.1';
    const SEARCH_CONFIG = 'fields=name,capital,population,flags,languages';
    
    return fetch(`${BASE_URL}/name/${name}?${SEARCH_CONFIG}`).then(resp => {

    if (!resp.ok) {
        throw new Error(resp.status);
    }

    return resp.json();
    });
}
