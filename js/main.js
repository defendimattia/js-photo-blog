const imgArray = []

const source = "https://lanciweb.github.io/demo/api/pictures/"

// chiamo API e per ogni oggetto contenuto nell'array di oggetti, vado a prendere la chiave "url" e pusho il valore in "imgArray"
axios.get(source)
    .then(response => {
        const callData = response.data
        callData.forEach(obj => {
            imgArray.push(obj.url)
        });

    })

