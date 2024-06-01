import { AiOutlineShoppingCart } from "react-icons/ai";
import { NumberOrder } from "../numberOrders";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export function Cart() {
  const location = useLocation();
  let price = 0.0;
  const orderState = useSelector((state) => state.shopReducer);
  const orderList = orderState.orders;
  console.log(orderList.length);
  orderList.forEach((obj) => {
    console.log(obj.offPrice);
    let orderPrice = obj.offPrice != 0 ? +obj.offPrice : +obj.price;
    let quantity = obj.quantity;
    price += quantity * orderPrice;
  });
  return (
    <div className="flex flex-row gap-1 relative">
      <span>${price}.00</span>
      <Link to="/shop">
        <AiOutlineShoppingCart
          style={{ color: location.pathname === "/shop" ? "red" : "black" }}
          className="text-2xl"
        />
      </Link>
      <NumberOrder visible={orderList.length > 0 ? true : false} />
    </div>
  );
}
