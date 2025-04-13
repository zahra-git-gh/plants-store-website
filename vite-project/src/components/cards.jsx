import { useState } from "react";

import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { ShopIcon } from "./shopIcon";

export function Card({ name, price, offPrice = 0, src, stars, type }) {
  const [isCardHover, setIsCardHover] = useState(false);
  function starsFunc(star) {
    let count = star;
    const arrStars = ["", "", "", "", ""];
    return (
      <div className="flex flex-row ">
        {arrStars.map((str, i) => {
          i === 0 ? count : count--;
          return count > 0 ? (
            <MdOutlineStar key={i} className="text-amber-500 text-lg" />
          ) : (
            <IoMdStarOutline key={i} className="text-lg" />
          );
        })}
      </div>
    );
  }
  return (
    <div className=" w-60 h-max rounded-lg">
      <div
        onMouseOver={() => setIsCardHover(() => true)}
        onMouseOut={() => setIsCardHover(() => false)}
        style={{ backgroundImage: `url(${src})` }}
        className="relative w-60 h-60 bg-cover bg-center rounded-t-lg"
      >
        <ShopIcon isCardHover={isCardHover} item={{name, price, offPrice , src, stars, type}} />
      </div>
      <div className="p-4">
        <span className="text-sm text-slate-800">{type}</span>
        <p>{name}</p>
        <div className="flex flex-row py-2"></div>
        {starsFunc(stars)}
        <div className="flex flex-row gap-2">
          {offPrice ? (
            <>
            <p className="text-slate-600 line-through">${price}</p>
            <p>${offPrice}</p>
            </>
          ) : (
            <p>${price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
