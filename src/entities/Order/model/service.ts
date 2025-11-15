import { Order, OrderStatus } from "./types"

export const orderService = {
    isReady(order: Order): boolean {
        return order.status === OrderStatus.READY
    },

    isCancelled(order: Order): boolean {
        return order.status === OrderStatus.CANCELED
    },

    isCooking(order: Order): boolean {
        return order.status === OrderStatus.COOKING
    },

    isConfirmed(order: Order): boolean {
        return order.status === OrderStatus.CONFIRMED
    },

    canBeCancelled(order: Order): boolean {
        const cancellableStatuses: OrderStatus[] = [OrderStatus.CONFIRMED, OrderStatus.COOKING];
        return cancellableStatuses.includes(order.status)
    },
}