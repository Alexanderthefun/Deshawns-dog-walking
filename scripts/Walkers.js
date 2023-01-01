import { assignedCityNames } from "./CityList.js"
import { getWalkerCities, getWalkers } from "./database.js"


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {                                                   
        const itemClicked = clickEvent.target                                                  
        if (itemClicked.id.startsWith("walker")) {                                               
            const [,walkerId] = itemClicked.id.split("--")                                                         
            for (const walker of walkers) { 
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)



const walkers = getWalkers()
const walkerCities = getWalkerCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

export const filterWalkerCitiesByWalker = (walker) => {
    let assignments = []
    for (const assignment of walkerCities) {
        if (walker.id === assignment.walkerId)
        assignments.push(assignment)
    }
    return assignments
}

