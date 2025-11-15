import { UserDTO, User } from "./types"

export const userFromDto = (dto: UserDTO): User => {
    return {
        id: dto.id,
        name: dto.name,
        phoneNumber: dto.phone_number,
        address: dto.address ? 
        {
            id: dto.address.id,
            userId: dto.address.userId,
            city: dto.address.city,
            street: dto.address.street,
            houseNumber: dto.address.house_number,
            apartment: dto.address?.apartment ?? null,
        } : null,
        orders: dto.orders,
    }
}

export const userToDto = (dto: User): UserDTO => {
    return {
        id: dto.id,
        name: dto.name,
        phone_number: dto.phoneNumber,
        address: dto.address ? 
        {
            id: dto.address.id,
            userId: dto.address.userId,
            city: dto.address.city,
            street: dto.address.street,
            house_number: dto.address.houseNumber,
            apartment: dto.address?.apartment ?? null,
        } : null,
        orders: dto.orders,
    }
}