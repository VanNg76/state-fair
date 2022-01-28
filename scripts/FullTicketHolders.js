const eventHub = document.querySelector("#state-fair")

export let fullTicketCount = 0

export const FullTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", () => {
        document.querySelector(".rides").innerHTML += `<div class="person rider"></div>`
        document.querySelector(".food").innerHTML += `<div class="person eater"></div>`
        document.querySelector(".games").innerHTML += `<div class="person player"></div>`
        document.querySelector(".sideshow").innerHTML += `<div class="person bigSpender"></div>`

        fullTicketCount++
        document.dispatchEvent(new CustomEvent("stateChanged"))

    })
}

