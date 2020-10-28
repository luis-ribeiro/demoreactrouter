import React from "react";
import IMatch from "../models/IMatch";

interface IAppProductDetailProps 
{
    match:IMatch;
}
export default class AppProductDetail extends React.Component<IAppProductDetailProps> {

    render() {

        return (
        "product detail"  + this.props.match.params.id
        )

    }
}