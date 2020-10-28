import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Router, Route, Switch } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { StoreService } from "../services/StoreService";

interface IAppProductsState {
    products: IProduct[];
    isLoading: boolean;
}

export default class AppProducts extends React.Component<{}, IAppProductsState>  {
    constructor({ }, state: IAppProductsState) {
        super({}, state)
        this.state = { isLoading: false, products: [] };
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {

        return (
            this.state.isLoading ?
                "Loading..."
                : this.state.products.map(p => p.title)
        )

    }

    getProducts(numberOfResults: number = 20): void {
        this.setState({ isLoading: true })

        StoreService.getProducts(numberOfResults).then(_products => {
            this.setState({ products: _products, isLoading: false })
        })
    }
}