import { ShopCard } from "./shopCard";
import { useSelector } from "react-redux";
export function CardsContainer(){
    const orderState= useSelector((state)=>state.shopReducer)
    const orderList=orderState.orders
    return <div>
        {orderList.map((order, i)=>{
            return <ShopCard key={i} {...order}/>
        })}
    </div>
}