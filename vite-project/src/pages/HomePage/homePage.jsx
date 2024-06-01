// import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/cards";
import { Header } from "../../components/header";
import { SortStars } from "../../components/sortStars";
import { SearchInput } from "../../components/searchInput";
import { useState } from "react";
// import { ToastContainer } from "../../components/toastContainer";

export function HomePage() {
  const [data, setData] = useState();
  const [isTrue, setIsTrue] = useState();
  console.log(`this is data : ${data}`);
  console.log(`this is if sort by stars : ${isTrue}`);
  const plants = useSelector((state) => {
    return state.reducer.plants;
  });
  const sortedPlants = plants.slice(0).sort((a, b) => {
   return b.stars - a.stars
  });
  console.log(`this is sorted palnts: ${sortedPlants}`, sortedPlants);
  function isSortByStars(data) {
    setIsTrue(data);
  }
  const sendData = (data) => {
    setData(data);
  };
  function makeCards(array) {
    return array.map((obj, i) => {
      if (data) {
        if (obj.name.toLowerCase().includes(data.toLowerCase())) {
          return <Card {...obj} key={i} />;
        } else {
          return "";
        }
      } else {
        return <Card {...obj} key={i} />;
      }
    });
  }
  return (
    <>
      <Header></Header>
      <div className="w-full px-24 mt-10 flex flex-col justify-start min-[550px]:flex-row">
        <SortStars isSortByStars={isSortByStars} />
        <SearchInput sendData={sendData} />
      </div>
      <hr />
      <div className="w-full h-full mb-48">
        <div className="flex flex-wrap justify-center gap-7 ms-28 mt-14 me-28">
          {
            makeCards(isTrue?  sortedPlants: plants )
          }
        </div>
      </div>
    </>
  );
}
