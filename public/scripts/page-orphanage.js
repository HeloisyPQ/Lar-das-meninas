
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// Variável contante const mymap, objeto L 
// Acessa mymap
//e setView([Latitude, Logintude], Zoom)
//const mymap = L.map('mapid').setView([51.505, -0.09], 15);

  // Get values from html
    const lat = document.querySelector('span[data-lat]').dataset.lat
    const lng = document.querySelector('span[data-lng]').dataset.lng

    // Create map. 
    const map = L.map('mapid', options).setView([lat, lng], 13); 

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

    
    // Create and add marker. 

L.marker([lat, lng], {icon: icon}). // Cria uma marcação na posição [Posição1, Posição2]. 
addTo(map) // Adiciona ao mapa. 
   
    // Image gallery 
    function selectImage(event) {
        const button = event.currentTarget;

        // Remover todas as classes .active 
        const buttons = document.querySelectorAll(".images button");
        console.log(buttons);
        console.log(buttons.children);
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button){
            button.classList.remove("active")
        }

        // Selecionar a imagem clicada 
        const image = button.children[0];
        const imageContainer = document.querySelector(".orphanage-details > img")

        // Atualizar o container de imagem 
        imageContainer.src = image.src;

        // Adicionar a classe .active para este botão 
        button.classList.add("active")
    }