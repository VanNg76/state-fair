const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export let foodTicketCount = 0

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", () => {
        const html = `<div class="person eater"></div>`
        foodTicketCount++
        contentTarget.innerHTML += html
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

