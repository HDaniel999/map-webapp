import 'whatwg-fetch'

export function getCoordinates() {
    return fetch('https://parcomap-api.herokuapp.com/api/coordinate')
        .then(response => response.json())
        .then(response => response)
}

export function getCoordinate (id) {
    return fetch(`https://parcomap-api.herokuapp.com/api/coordinate/${id}`)
        .then(response => response.json())
}

export function newCoordinate (coordinate) {
    const options = {
        method: 'POST',
        body: JSON.stringify(coordinate),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch('https://parcomap-api.herokuapp.com/api/coordinate', options)
        .then(response => response.json())
}