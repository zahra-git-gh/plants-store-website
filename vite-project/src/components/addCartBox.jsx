export function AddCartBox({ isHide }) {
  // console.log(isHide);
  return (
    <div
      style={{ display: isHide ? "flex" : "none" }}
      className="absolute rounded-sm flex justify-center top-1 right-9 bg-gray-600 p-1 w-20 "
    >
      <p className="text-[10px] text-white">Add to cart</p>
    </div>
  );
}
