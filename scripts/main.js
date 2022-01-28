// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolders.js"
import { GamesTicketHolders } from "./games/GamesTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js"
import { FullTicketHolders } from "./FullTicketHolders.js"

TicketBooth()

RideTicketHolders()
FoodTicketHolders()
GamesTicketHolders()
SideshowTicketHolders()
FullTicketHolders()
