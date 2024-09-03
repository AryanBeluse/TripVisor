const searchBtn = document.getElementById('search');
const clearBtn = document.getElementById('clear');

function searchDestination() {

    const input = document.getElementById('destination').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            const countries = ['country', 'countries'];
            const beaches = ['beach', 'beaches'];
            const temples = ['temple', 'temples'];

            if (countries.includes(input.toLowerCase())) {
                for (let i = 0; i < data.countries.length; i++) {
                    for (let j = 0; j < data.countries[i].cities.length; j++) {
                        resultDiv.innerHTML += `<div id="result">`;
                        resultDiv.innerHTML += `<img src="${data.countries[i].cities[j].imageUrl}" alt="">`;
                        resultDiv.innerHTML += `<h2>${data.countries[i].cities[j].name}</h2>`;
                        resultDiv.innerHTML += `<p>${data.countries[i].cities[j].description}</p>`;
                        resultDiv.innerHTML += `<button class="visit-button">Visit</button>`
                        resultDiv.innerHTML += `</div>`;
                    }
                }
            } else if (beaches.includes(input.toLowerCase())) {
                for (let i = 0; i < data.beaches.length; i++) {
                    resultDiv.innerHTML += `<div id="result">`;
                    resultDiv.innerHTML += `<img src="${data.beaches[i].imageUrl}" alt="">`;
                    resultDiv.innerHTML += `<h3>${data.beaches[i].name}</h3>`;
                    resultDiv.innerHTML += `<p>${data.beaches[i].description}</p>`;
                    resultDiv.innerHTML += `<button class="visit-button">Visit</button>`
                    resultDiv.innerHTML += `</div>`;
                }
            } else if (temples.includes(input.toLowerCase())) {
                for (let i = 0; i < data.temples.length; i++) {
                    resultDiv.innerHTML += `<div id="result">`;
                    resultDiv.innerHTML += `<img src="${data.temples[i].imageUrl}" alt="">`;
                    resultDiv.innerHTML += `<h3>${data.temples[i].name}</h3>`;
                    resultDiv.innerHTML += `<p>${data.temples[i].description}</p>`;
                    resultDiv.innerHTML += `<button class="visit-button">Visit</button>`
                    resultDiv.innerHTML += `</div>`;
                }
            } else {
                resultDiv.innerHTML = 'Destination not found.';
            }
        })

        .catch(error => {
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function clearDestination() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

function thankyou() {
    console.log('contact button tapped')
    alert('Thank you for contacting us!');
}

searchBtn.addEventListener('click', searchDestination);
clearBtn.addEventListener('click', clearDestination);