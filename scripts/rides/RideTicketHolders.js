const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export let rideTicketCount = 0

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", () => {
        const html = `<div class="person rider"></div>`
        rideTicketCount += 1

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

