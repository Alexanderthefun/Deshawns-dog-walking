import { getCities, getWalkerCities, getWalkers } from "./database.js"
import { filterWalkerCitiesByWalker } from "./Walkers.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()
// const filteredCityArray = filterWalkerCitiesByWalker(walker)

export const cityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

export const assignedCityNames = (assignments) => {
    let cityNamesHTML = ""
    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                cityNamesHTML += `\n ${city.name}`
            }
        }
        
    }
    return cityNamesHTML
}