
// Variável contante const mymap, objeto L 
// Acessa mymap
//e setView([Latitude, Logintude], Zoom)
//const mymap = L.map('mapid').setView([51.505, -0.09], 15);
    // Create map. 
const map = L.map('mapid').setView([-8.757835, -63.872515], 13); 

    // Create and add tileLayer. 
L.tileLayer( // Cria o tileLayer, a primeira camada que vai recebr o mapa. 

    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // Argumento um (1): String. 
     
).addTo(map); // Adiciona para o mapa (map). 

    // Create icon. 

    const icon = L.icon({ // Objeto e propiedades. 
        iconUrl : "./local/images/map-marker.svg",
        ionSize: [58, 68], // [Largura, altura]
        iconAnchor: [29, 68], // Onde vai estar ancorado. 
        popupAnchor: [170, 2] // Quando abrir, o popup vai ficar ao lado. 
    })

    // Creat popup overlay. 

    const popup = L.popup({
        closeButton: false, // Não aparecer. 
        className: 'map-popup', 
        minWidth: 240,
        minHeight: 240
    }).setContent('Lar das meninas <a href="orphanage.html?id=1 class="choose-orphanage"> <img src="./local/images/arrow-white.svg">') // Conteúdo do popup, escrever em String. 

    // Create and add marker. 

L.marker([-8.757835, -63.872515], {icon: icon}). // Cria uma marcação na posição [Posição1, Posição2]. 
addTo(map) // Adiciona ao mapa. 
    .bindPopup(popup) // Cria uma ligação. 
    // .openPopup(); // Abre o Pop-up. 