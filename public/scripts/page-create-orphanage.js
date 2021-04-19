
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
        iconUrl : "/images/map-marker.svg",
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

function deleteField(event) {

    // Quem disparou, no caso, o <span>. 
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // Limpar o valor do campo. 
        span.parentNode.children[0].value = "";
        return;
    }
    // Deletar o campo inteiro clonado. 
    span.parentNode.remove();
}

// Select yes or no. 
function toggleSelect(event) {
    console.log(' Funcionando. ');
    // Retirar a class .active (dos botões). 
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active');
    })
    // Colocar a class .active nesse botão clicado. 
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado. 
    const input = document.querySelectorAll('[name="open_on_weekends"]')

    input.value = button.dataset.value
}