import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
export function HumbergerMenu({
  isSideMenuOpen,
  setIsSideMenuOpen,
  arrayPages,
}) {
  console.log(isSideMenuOpen);

  return (
    <div
      style={{ display: isSideMenuOpen ? "flex" : "none" }}
      className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0  items-center transition-all"
    >
      <section className="text-black shadow-2xl bg-white flex-col absolute right-0 top-0 h-screen p-12 gap-8 z-50 flex items-center justify-center ">
        <IoIosClose
          className="text-3xl absolute top-5 left-3 cursor-pointer"
          onClick={() => {
            setIsSideMenuOpen((prev) => !prev);
          }}
        />
        <div className="flex justify-center items-center">
          <ul className="flex flex-col gap-5">
            {arrayPages.map((arr, i) => {
              return (
                <li key={i}>
                  <Link to={arr[1]} className="text-left text-xl">
                    {arr[0]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
