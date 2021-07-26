const astrosContainer = document.getElementById('astros')

fetch('https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        astrosContainer.innerHTML = `<tr><th>Name</th><th>Position</th></tr>`
        console.log(json)

        json.people.forEach((person) => {
            astrosContainer.innerHTML += `<tr><td>${person.name}</td><td>${person.position}</td></tr>`
        })
    })
