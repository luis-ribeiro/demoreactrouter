import Axios from "axios";
import { ICart } from "../models/ICart";
import { IProduct } from "../models/IProduct";

export class StoreService {

    public static async getProducts(top: number = 20): Promise<IProduct[]> {
        let response = await Axios.get(`https://fakestoreapi.com/products?limit=${top}`);
        return response.data;
    }

    public static async getCart(): Promise<ICart> {
        let response = await Axios.get(`https://fakestoreapi.com/carts/1`);
        return response.data;
    }
}