// Variável contante const mymap, objeto L 
// Acessa mymap
//e setView([Latitude, Logintude], Zoom)
//const mymap = L.map('mapid').setView([51.505, -0.09], 15);
    // Create map. 
const map = L.map('mapid').setView([-8.757839, -63.872515], 13); 

    // Create and add tileLayer. 
L.tileLayer( // Cria o tileLayer, a primeira camada que vai recebr o mapa. 

    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // Argumento um (1): String. 
     
).addTo(map); // Adiciona para o mapa (map). 

    // Create icon. 

    const icon = L.icon({ // Objeto e propiedades. 
        iconUrl : "/images/map-marker.svg",
        ionSize: [58, 68], // [Largura, altura]
        iconAnchor: [29, 68], // Onde vai estar ancorado. 
        popupAnchor: [170, 2] // Quando abrir, o popup vai ficar ao lado. 
    })

function addMarker({id, name, lat, lng}) {
    
    // Creat popup overlay. 

    const popup = L.popup({
        closeButton: false, // Não aparecer. 
        className: 'map-popup', 
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`) // Conteúdo do popup, escrever em String. 

    // Create and add marker. 

L.marker([lat, lng], {icon: icon}). // Cria uma marcação na posição [Posição1, Posição2]. 
addTo(map) // Adiciona ao mapa. 
.bindPopup(popup) // Cria umaligação. 
// .openPopup(); // Abre oPop-up. 
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => { // Percorre cada elemento de orphanages em termos de span.
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    } // Dataset -> data-....

    addMarker(orphanage)
})