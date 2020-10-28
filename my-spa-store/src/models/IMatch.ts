import { IParams } from "./IParams";

interface IMatch {
    path:string;
    url:string;
    isExact:boolean;
    params:IParams;
}


export default IMatch;