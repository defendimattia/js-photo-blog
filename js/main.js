
const source = "https://lanciweb.github.io/demo/api/pictures/"

const cardsImgElements = document.querySelectorAll('.card-img')


axios.get(source)
    .then(response => {

        // array che contiene gli oggetti presi dall'API
        const pictures = response.data

        // iterazione su ogni oggetto dell'array
        pictures.forEach(picture => {

            // definisco una costante che contiene un elemento img da inserire nel DOM
            const createImgElement = document.createElement('img')

            // inserisco l'url corrispondente dell'oggetto nel src dell'elemento immagine appena creato
            createImgElement.src = picture.url

            // calcolo l'indice dell'elemento in cui inserire l'immagine
            const imgIndex = picture.id - 1

            // svuoto il contenuto precedente dell'elemento .card-img selezionato con imageIndex
            cardsImgElements[imgIndex].innerHTML = ""

            // Aggiungo l'elemento <img> appena creato come figlio dell'elemento .card-img corrispondente
            cardsImgElements[imgIndex].appendChild(createImgElement)
        });
    })

// overlay

const buttonElement = document.querySelector("button")
const overlayElement = document.getElementById("overlay-container")
const cardsElements = document.querySelectorAll('.card')
const overlayImgElement = document.getElementById("overlay-img")



buttonElement.addEventListener("click", () => { overlayElement.classList.add("hidden") })

cardsElements.forEach((card) => {
    card.addEventListener("click", () => {

        overlayElement.classList.remove("hidden")

        const imgElement = card.querySelector('.card-img img')

        // Modifica l'attributo src dell'immagine nell'overlay con l'src dell'immagine della card cliccata
        overlayImgElement.src = imgElement.src
    })
})




