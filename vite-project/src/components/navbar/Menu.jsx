import { Link, useLocation } from "react-router-dom";

export function Menu({ arrayPages }) {
  const location=useLocation()
  console.log(location.pathname);
  return (
    <div className="hidden lg:flex">
      <ul className="flex flex-row gap-6 ">
        {arrayPages.map((arr, i) => {
          return (
            <li key={i}>
              <Link
                style={{ color: arr[0] === "Home" && location.pathname==='/' ? "red" : "black" }}
                to={arr[1]}
                className="text-xl"
              >
                {arr[0]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
