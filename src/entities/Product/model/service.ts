import { Product } from "./types"

export const productService = {
    hasDiscount(product: Product): boolean {
        return Boolean(product?.discount)
    },

    hasDescription(product: Product): boolean {
        return Boolean(product?.description)
    }
}