
const source = "https://lanciweb.github.io/demo/api/pictures/"

const cardsImgElements = document.querySelectorAll('.card-img');



axios.get(source)
    .then(response => {

        // array che contiene gli oggetti presi dall'API
        const pictures = response.data

        // iterazione su ogni oggetto dell'array
        pictures.forEach(picture => {

            // definisco una costante che contiene un elemento img da inserire nel DOM
            const imgElement = document.createElement('img')

            // inserisco l'url corrispondente dell'oggetto nel src dell'elemento immagine appena creato
            imgElement.src = picture.url

            // calcolo l'indice dell'elemento in cui inserire l'immagine
            const imageIndex = picture.id - 1

            // svuoto il contenuto precedente dell'elemento .card-img selezionato con imageIndex
            cardsImgElements[imageIndex].innerHTML = ""

            // Aggiungo l'elemento <img> appena creato come figlio dell'elemento .card-img corrispondente
            cardsImgElements[imageIndex].appendChild(imgElement)
        });
    })




