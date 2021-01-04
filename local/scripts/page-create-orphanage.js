
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
    })

let marker;

    // Creat and add marker
    map.on('click', (event) => {
        // console.log(event);
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        document.querySelector('[name=lat]').value = lat;
        document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// Adicionar o campo de foto
function addPhotoField() {
    console.log(' Teste. ');
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última imagem adicionada. 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo está vazio, se sim, não adicionar ao container de imagens 
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return;
    }
    // Limpar o campo antes de adicionar ao container de imagens 
    input.value = "";
    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}