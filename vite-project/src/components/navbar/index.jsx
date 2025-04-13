import { TiThMenu } from "react-icons/ti";

import { HumbergerMenu } from "./HumbergerMenu";
import { useState } from "react";
import { Menu } from "./Menu";
import { LogoNav } from "./LogoNav";
import { Cart } from "./Cart";

export function Navbar() {
  // const pages = [
  //   { page: "Home", href:'/' },
  //   { page: "About Us", href: "#" },
  //   { page: "Contact Us", href: "#" },
  // ];
  const pages = [
    [ "Home", '/'] ,
    ["About Us", '#'] ,
    ["Contact Us","#"] ,
  ];
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div>
      <nav className="w-full flex flex-wrap justify-center sm:justify-around">
        <LogoNav />
        <div className="flex justify-between items-center gap-20 px-2 pt-4 min-[380px]:ps-7">
          <Menu arrayPages={pages} />

          <Cart />
          <TiThMenu
            className="text-2xl lg:hidden cursor-pointer"
            onClick={() => {
              console.log("lala");
              setIsSideMenuOpen((prev) => !prev);
            }}
          />
        </div>
        {/* create humbergar menu */}
        <HumbergerMenu
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
          arrayPages={pages}
        />
      </nav>
    </div>
  );
}
