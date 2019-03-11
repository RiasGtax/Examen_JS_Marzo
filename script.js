/* Data */
var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {
    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    }
};

/* Global vars */
var global = {
    selectedCountry: ""
};

/* Utilidad */
let Utils = function () {
    return {
        searchClass: function (className) {
            return document.getElementsByClassName(className);
        }
    }
}();

/**
 * Crear primera carta
 */
let loadFirstCard = function () {
    let text = "\n";

    Object.keys(shoe).forEach(element => {
        text += shoe[element] + " \n";
    });

    Utils.searchClass('cardText')[0].innerHTML = text;
};

/**
 * Cargar datos (lista) al HTML
 * @param {*} countries 
 */
let loadElementsToHtml = function (countries) {
    Utils.searchClass('menuItems')[0].innerHTML = function () {
        let html = "";

        countries.forEach(country => {
            html += `<li><a id="${country}" href="#">${country}</a></li>`;
        });

        return html;
    }();
};

/**
 * Añadir evento a los elementos <li> > <a>
 */
let loadEventsToHtml = function () {
    Utils.searchClass('menuItems')[0].childNodes.forEach(child => {
        child.childNodes[0].addEventListener('click', function () {
            global.selectedCountry = this.id;
            console.log(global);
        });
    });
};

/**
 * Obtener datos
 */
let loadMenuFromData = function () {
    let countries = [];

    Object.keys(raffles).forEach(element => {
        if (countries.indexOf(raffles[element]['country']) === -1) countries.push(raffles[element]['country']);
    });

    loadElementsToHtml(countries);
    loadEventsToHtml();
};

/**
 * Carga las cartas de cada raffle
 */
let loadRaffles = function () {
    Object.keys(raffles).forEach(raffle => {
        Utils.searchClass('raffleContainer')[0].innerHTML += getRaffleCard(raffles[raffle]);
    });
};

let getRaffleCard = function (raffle) {
    return `<div class="card" style="width: 18rem;">
                <img class="raffleLogo" src="${raffle.logo}">
                <div class="card-body">
                    <h5 class="card-title">${raffle.collection}</h5>
                    <p>${raffle.country}</p>
                    <p>${raffle.purchase}</p>
                    <p>${raffle.Sizes}</p>
                    <p>${raffle.Opens}</p>
                    <p>${raffle.Closes}</p>
                    <p><a href="${raffle.url}">Web</a></p>
                </div>
            </div>`
};

/* FLUJO */
new function () {
    loadFirstCard();
    loadMenuFromData();
    loadRaffles();
}();