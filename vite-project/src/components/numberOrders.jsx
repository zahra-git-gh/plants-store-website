import { useSelector } from "react-redux";

export function NumberOrder({ visible }) {
  let number = 0;
  
  const orderState = useSelector((state) => state.shopReducer);
  const orderlist = orderState.orders;
  orderlist.forEach((object) => {
    number += object.quantity;
  });
  return (
    <div
      style={{top:'-12px', right:'-14px', display: visible ? "flex" : "none" }}
      className="absolute px-2 w-max h-5 rounded-full bg-red-600 justify-center items-center"
    >
      <p className="text-white text-xs text-center">{number}</p>
    </div>
  );
}
