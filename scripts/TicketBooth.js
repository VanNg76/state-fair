import { rideTicketCount } from "./rides/RideTicketHolders.js"
import { foodTicketCount } from "./food/FoodTicketHolders.js"
import { gamesTicketCount } from "./games/GamesTicketHolders.js"
import { sideshowTicketCount } from "./sideshows/SideshowTicketHolders.js"
import { fullTicketCount } from "./FullTicketHolders.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// display Total ticket purchased
// Regenerate HTML state changed
document.addEventListener("stateChanged", event => {
    const totalTicket = rideTicketCount + foodTicketCount + gamesTicketCount + sideshowTicketCount + fullTicketCount
    document.querySelector(".customers").innerHTML = `Total ticket purchased: ${totalTicket}`
    
})


// display booth ticket button
export const TicketBooth = () => {
    contentTarget.innerHTML += `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gamesTicket">Games Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullTicket">Full Package Ticket</button>
        </div>
    `
}

// click event for ticket buttons
eventHub.addEventListener(
    "click",
    (clickEvent) => {
    const clickedItem = clickEvent.target
    if (clickedItem.id === "rideTicket") {
        eventHub.dispatchEvent(new CustomEvent("rideTicketPurchased"))
    } else if (clickedItem.id === "foodTicket") {
        eventHub.dispatchEvent(new CustomEvent("foodTicketPurchased"))
    } else if (clickedItem.id === "gamesTicket") {
        eventHub.dispatchEvent(new CustomEvent("gamesTicketPurchased"))
    } else if (clickedItem.id === "sideshowTicket") {
        eventHub.dispatchEvent(new CustomEvent("sideshowTicketPurchased"))
    } else if (clickedItem.id === "fullTicket") {
        eventHub.dispatchEvent(new CustomEvent("fullTicketPurchased"))
    }
})
