const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export let gamesTicketCount = 0

export const GamesTicketHolders = () => {
    eventHub.addEventListener("gamesTicketPurchased", () => {
        const html = `<div class="person player"></div>`
        gamesTicketCount++
        
        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

