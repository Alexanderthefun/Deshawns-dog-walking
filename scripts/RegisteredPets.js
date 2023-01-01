import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const walkers = getWalkers()
const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petPrimaryKey] = itemClicked.id.split("--")   /*  .Split is getting rid of "--" within the string on line 27. 
                                                                  The remaining "pet" & "${pet.id}" is stored in a new array.
                                                                  So the 'petPrimaryKey' in the array is there to store the value  
                                                                  of ${pet.id} which is also on line 27. 
                                                                  The comma is in the array to "throw away" the 'pet' part
                                                                  of L27 because we dont need it in the function. */
                let matchingPet = null
                for (const pet of pets) {
                     if (pet.id === parseInt(petPrimaryKey)) {  
                    matchingPet = pet                               /*  parseInt is a method used to grab the integer out of its argument */
                     }
                }
                let matchingWalker = null
                for (const walker of walkers) {
                    if (matchingPet.walkerId === walker.id) {
                        matchingWalker = walker
                    }
                }    
        window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
        }
    }
)




export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

