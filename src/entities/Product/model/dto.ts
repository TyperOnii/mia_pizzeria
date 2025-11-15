import { Product, ProductDTO } from "./types";

export const productFromDto = (dto: ProductDTO): Product => {
    return {
        id: dto.id,
        title: dto.title,
        weight: dto.weight,
        details: {
            id: dto.details.id,
            productId: dto.details.productId,
            calories: dto.details.calories,
            proteins: dto.details.proteins,
            fats: dto.details.fats,
            carbs: dto.details.carbs,
        },
        ingredients: dto.ingredients,
        quantity: dto.quantity,
        price: dto.price,
        description: dto?.description ?? null,
        discount: dto?.discount ?? null,
        orders: dto.orders,
    }
}

export const productToDto = (dto: Product): ProductDTO => {
    return {
        id: dto.id,
        title: dto.title,
        weight: dto.weight,
        details: {
            id: dto.details.id,
            productId: dto.details.productId,
            calories: dto.details.calories,
            proteins: dto.details.proteins,
            fats: dto.details.fats,
            carbs: dto.details.carbs,
        },
        ingredients: dto.ingredients,
        quantity: dto.quantity,
        price: dto.price,
        description: dto?.description ?? null,
        discount: dto?.discount ?? null,
        orders: dto.orders,
    }
}