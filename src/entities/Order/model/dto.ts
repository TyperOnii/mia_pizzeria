import { Order, OrderDTO } from "../types"

export const orderFromDto = (dto: OrderDTO): Order => {
    return {
        id: dto.id,
        status: dto.status,
        totalAmount: dto.total_amount,
        userId: dto.userId,
        products: dto.products,
    }
}

export const orderToDto = (dto: Order): OrderDTO => {
    return {
        id: dto.id,
        status: dto.status,
        total_amount: dto.totalAmount,
        userId: dto.userId,
        products: dto.products,
    }
}