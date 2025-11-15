import { UniqueId } from "@/types/value-object/unique-id";
import { Money } from "@/types/value-object/money";
import { ProductOnOrder, ProductOnOrderDTO } from "../../Product";

export interface Order {
    id: UniqueId,
    status: OrderStatus,
    totalAmount: Money,
    userId: UniqueId,
    products: ProductOnOrder[],
}

export const OrderStatus = {
    CONFIRMED: 'confirmed',
    COOKING: 'cooking',
    READY: 'ready',
    CANCELED: 'canceled',
} as const

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus]

// DTO

export type CreateOrderDTO = Omit<Order, 'id'>
export type UpdateOrderDTO = Pick<Order, 'status'>

export interface OrderDTO {
    id: UniqueId,
    status: OrderStatus,
    total_amount: Money,
    userId: UniqueId,
    products: ProductOnOrderDTO[],
}