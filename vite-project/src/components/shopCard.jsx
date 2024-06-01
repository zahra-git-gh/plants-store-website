import { IoCloseOutline } from "react-icons/io5";
import { decreaseItem, deleteOrderItem } from "../services/state/actions/order.actions";
import { useDispatch } from "react-redux";
import { FiMinus } from "react-icons/fi";

export function ShopCard({ name, src, quantity, price, offPrice = 0 }) {
  const dispatch=useDispatch()
  function minuseBtnHandler(){
    console.log('dispatch button clicked');
    if(quantity>1){
      dispatch(
        decreaseItem({ name, src, quantity, price, offPrice})
      )

    }else{
      dispatch(
        deleteOrderItem({ name, src, quantity, price, offPrice})
      )
    }
  }
  function closeBtnHandler(){
    dispatch(
      deleteOrderItem({ name, src, quantity, price, offPrice})
    )
  }
  return (
    <div className="w-full h-max px-4 min-[600px]:px-24 mb-4 ">
      <div className="w-full shadow-lg">
        <div className="w-full h-36 rounded-lg border-solid border border-inherit shadow-sm flex justify-between">
          <div className="flex">
            <div
              style={{
                backgroundImage:
                  `url(${src})`,
              }}
              className="w-[144px] h-36 bg-cover bg-center"
            ></div>

            <div className="px-4 py-2 flex flex-col gap-2">
              <p style={{overflowWrap:'break-word'}} className="text-xs min-[370px]:text-lg font-medium sm:text-2xl">{name}</p>
              <p className="text-lg font-thin text-gray-700">{quantity} x {offPrice? offPrice: price}</p>
            </div>
          </div>
          <div className="flex items-center text-2xl pe-2">
            <FiMinus onClick={minuseBtnHandler} className="cursor-pointer"/>
            <IoCloseOutline onClick={closeBtnHandler} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
