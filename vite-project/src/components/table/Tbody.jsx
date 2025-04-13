import { useSelector } from "react-redux";
import { Trow } from "./Trow";

export function Tbody() {
  const orderState=useSelector((state)=>state.shopReducer)
  const orderlist=orderState.orders
console.log(orderlist);
  return (
    <tbody>
      {orderlist.map((obj, i)=>{
        return <Trow key={i} {...obj} />
      })}
    </tbody>
  );
}
