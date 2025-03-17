const source = "https://lanciweb.github.io/demo/api/pictures/"

const cardsElements = document.querySelectorAll('.card')

axios.get(source)
    .then(response => {

        // array di oggetti presi dall'api
        const cards = response.data

        cards.forEach(card => {

            // crea un elemento <img> da inserire nel DOM
            const createImgElement = document.createElement('img')

            // imposta l'url dell'immagine nell'attributo src dell'elemento <img>
            createImgElement.src = card.url

            // imposta l'id "card-img" all'immagine
            createImgElement.classList.add('card-img')

            // crea un <div> per la data
            const newDate = document.createElement('div')

            // crea un <div> per il titolo
            const newTitle = document.createElement('div')

            // aggiungi la classe 'card-date' al div della data
            newDate.classList.add('card-date')

            // aggiungi la classe 'card-title' al div del titolo
            newTitle.classList.add('card-title')

            // imposta il testo della data nel div corrispondente
            newDate.innerText = card.date

            // imposta il testo del titolo nel div corrispondente
            newTitle.innerText = card.title

            // calcola l'indice dell'elemento in cui inserire l'immagine (considerando l'id dell'oggetto)
            const cardElement = cardsElements[card.id - 1]  // Seleziona la card corretta

            // aggiungi l'elemento <img> all'interno della card
            cardElement.appendChild(createImgElement)

            // aggiungi il div con la data all'interno dell'elemento .card
            cardElement.appendChild(newDate)

            // aggiungi il div con il titolo all'interno dell'elemento .card
            cardElement.appendChild(newTitle)
        });
    });

// overlay

const buttonElement = document.querySelector("button")
const overlayElement = document.getElementById("overlay-container")
const overlayImgElement = document.getElementById("overlay-img")

buttonElement.addEventListener("click", () => {
    overlayElement.classList.add("hidden")

    // aggiunge scrollbar
    document.body.style.overflow = 'visible'
})

cardsElements.forEach((card) => {
    card.addEventListener("click", () => {

        overlayElement.classList.remove("hidden")

        // rimuove scrollbar
        document.body.style.overflow = "hidden"

        const imgElement = card.querySelector('.card-img')

        // modifica l'attributo src dell'immagine nell'overlay con l'src dell'immagine della card cliccata
        overlayImgElement.src = imgElement.src;
    })
})