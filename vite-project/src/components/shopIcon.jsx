import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { AddCartBox } from "./addCartBox";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrderItem,
  increaseItem,
} from "../services/state/actions/order.actions";
import { Toast } from "./toast";

export function ShopIcon({ isCardHover, item }) {
  const [counter, setCounter] = useState([]);

  const [isShopIconHover, setIsShopIconHover] = useState(false);
  const orderlist = useSelector((state) => state.shopReducer);
  const orderlistMain = orderlist.orders;
  const dispatch = useDispatch();
  // setTimeout(() => {
  //   setCounter((c)=> c.slice(1, c.length-1))
  // }, 4000);
  function handleClick() {
    setCounter((c) =>{ 
      
      
     return [...c, ""]
    });
    const isOrderExist = orderlistMain.find((obj) => obj.name === item.name);
    console.log(isOrderExist);
    if (isOrderExist) {
      console.log(orderlist);
      dispatch(increaseItem(item));
    } else {
      dispatch(addOrderItem(item));
    }
  }
  return (
    <>
      <div
        onClick={handleClick}
        style={{ display: isCardHover ? "flex" : "none" }}
        className="absolute right-3 top-2 rounded-full w-8 h-8 shadow-md shadow-black/30 flex justify-center items-center cursor-pointer"
        onMouseOver={() => {
          setIsShopIconHover(() => true);
        }}
        onMouseOut={() => {
          setIsShopIconHover(() => false);
        }}
      >
        <FaBasketShopping
          style={{ color: isShopIconHover ? "#323232" : "#808080" }}
        />
        <AddCartBox isHide={isShopIconHover} />
      </div>
      <div className="flex flex-col items-end justify-end z-50 fixed bottom-0 left-3 h-[240px] overflow-hidden">
        {counter.map((toast, i) => {
          {
            setTimeout(() => {
              setCounter((c)=> c.slice(1, c.length))
            }, 4000);
          }
          return <Toast key={i} />;
        })}
      </div>
    </>
  );
}
