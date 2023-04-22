function createCountry(obj, list, info) {

    if (obj.length === 1) {
        list.innerHTML = '';
        return info.innerHTML = obj.map(({name: {official}, capital, population, flags: {svg, alt}, languages}) => 
        `<div class="item-list">
            <img src="${svg}" alt="${alt}" class="img" width="300px">
            <p> <span class="text">Name:</span> ${official}</p>
            <p> <span class="text">Population:</span> ${population} people</p>
            <p> <span class="text">Capital:</span> ${capital}</p>
            <p> <span class="text">Languages:</span> ${Object.values(languages)}</p>
        </div>`).join('')};

    if (obj.length > 1 && obj.length < 10) {
        info.innerHTML = '';
        return list.innerHTML = obj.map(({name: {official}, flags: {svg, alt}}) => 
        `<li class="mini-item-list">
            <img src="${svg}" alt="${alt}" width="50px" height="40px">
            <p>${official}</p>
        </li>`).join('')};
    }

    export {createCountry};
    