import { User } from "./types"

export const userService = {
    hasAddress(user: User): boolean {
        return Boolean(user?.address)
    },

    hasOrders(user: User): boolean {
        return Boolean(user.orders.length)
    },

}