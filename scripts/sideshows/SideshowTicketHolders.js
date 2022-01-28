const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export let sideshowTicketCount = 0

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", () => {
        const html = `<div class="person bigSpender"></div>`
        sideshowTicketCount++

        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

