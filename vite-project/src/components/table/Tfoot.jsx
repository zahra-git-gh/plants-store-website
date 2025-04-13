import { useSelector } from "react-redux";

export function Tfoot() {
    let totalPrice=0
    const orderState=useSelector((state)=>state.shopReducer)
    const orderList=orderState.orders
    orderList.forEach(obj => {
        const plantPrice=obj.offPrice? obj.offPrice : obj.price;
        const totalPriceItem=plantPrice * obj.quantity;
        totalPrice+=totalPriceItem
    });
  return (
    <tfoot className="rounded-b-md">
      <tr className="border-b border-gray-300">
        <td className="p-4 text-2xl font-semibold">Total</td>
        <td className="p-4 "></td>
        <td className="p-4 text-xl font-normal">{totalPrice}.00</td>
      </tr>
    </tfoot>
  );
}
