let prev = null
let next = null

const pokemon = document.getElementById('pokemon');

const getData = async(url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
};

const populateList = (url) => {
    const data = getData(url)
    pokemon.innerHTML = ''

    data.then(json => {
        for (const i in json.results) {
            pokemon.innerHTML += `<li>${json.results[i].name}</li>`
            next = json.next
            prev = json.previous
        }
    })
};


const populateNext = () => {
    if (next !== null) {
        populateList(next)
    } else {
        return
    }
};

const populatePrev = () => {
    if (prev !== null) {
        populateList(prev)
    } else {
        return
    }
};

populateList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');

document.getElementById('nextButton').addEventListener('click', populateNext);
document.getElementById('prevButton').addEventListener('click', populatePrev);