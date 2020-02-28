import 'whatwg-fetch'

export function getCoordinates() {
    return fetch('http://localhost:8080/api/coordinate')
        .then(response => response.json())
        .then(response => response)
}

export function getCoordinate (id) {
    return fetch(`http://localhost:8080/api/coordinate/${id}`)
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
    return fetch('http://localhost:8080/api/coordinate', options)
        .then(response => response.json())
}