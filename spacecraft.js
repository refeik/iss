const spacecraftContainer = document.getElementById('spacecraft')

fetch('https://corquaid.github.io/international-space-station-APIs/JSON/iss-docked-spacecraft.json')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        spacecraftContainer.innerHTML = `<tr><th>Spacecraft</th><th>Operator</th></tr>`
        console.log(json)

        json.spacecraft.forEach((spacecraft) => {
            spacecraftContainer.innerHTML += `<tr><td>${spacecraft.name}</td><td>${spacecraft.operator}</td></tr>`
        })
    })
