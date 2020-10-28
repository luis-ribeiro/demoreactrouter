export interface ICart {
    id: number;
    userId: number;
    date: Date;
    products: CartProduct[];
}

export interface CartProduct {
    productId:number;
    quantity:number;
}