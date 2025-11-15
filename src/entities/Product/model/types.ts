import { Money } from "@/types/value-object/money";
import { UniqueId } from "@/types/value-object/unique-id";

export interface Product {
    id: UniqueId,
    title: string,
    weight: number,
    details: ProductDetails,
    ingredients: string[],
    quantity: number,
    price: Money,
    description?: string | null,
    discount?: Money | null,
}
export interface CreateProductDto extends Omit<Product, 'id' | 'details'> {
    details: Omit<ProductDetails, 'id' | 'productId'>
}

interface ProductDetails {
    id: UniqueId,
    productId: UniqueId,
    calories: number,
    proteins: number,
    fats: number,
    carbs: number,
}

export interface ProductOnOrder {
    id: UniqueId,
    orderId: UniqueId,
    productId: UniqueId,
}

export interface ProductDTO {
    id: UniqueId,
    title: string,
    weight: number,
    details: ProductDetailsDTO,
    ingredients: string[],
    quantity: number,
    price: Money,
    description?: string | null,
    discount?: Money | null,
    orders: ProductOnOrderDTO,
}

export interface ProductDetailsDTO {
    id: UniqueId,
    productId: UniqueId,
    calories: number,
    proteins: number,
    fats: number,
    carbs: number,
}

export interface ProductOnOrderDTO {
    id: UniqueId,
    orderId: UniqueId,
    productId: UniqueId,
}