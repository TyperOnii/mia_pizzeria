import { Order } from "@/entities/Order";
import { UniqueId } from "@/types/value-object/unique-id";

export interface User {
    id: UniqueId,
    name: string,
    phoneNumber: string,
    address?: Address | null,
    orders: Order[],
}

export interface Address {
    id: UniqueId,
    userId: UniqueId,
    city: string,
    street: string,
    houseNumber: string,
    apartment?: string | null,
}

// DTO

export type CreateUserDTO = Omit<User, 'id' | 'address' | 'orders'>

export type UpdateUserDTO = Partial<Omit<User, 'id' | 'orders'>>

export interface UserDTO {
    id: UniqueId,
    name: string,
    phone_number: string,
    address?: AddressDTO | null,
    orders: Order[],
}

export interface AddressDTO {
    id: UniqueId,
    userId: UniqueId,
    city: string,
    street: string,
    house_number: string,
    apartment?: string | null,
}