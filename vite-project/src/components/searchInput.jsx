// import { useState } from "react";
import { PiPottedPlantThin } from "react-icons/pi";

export function SearchInput(props) {
  
    function handleChangeBtn(e){
        
        props.sendData(e.target.value)
    }
    
  return (
    <form  className="mb-2 flex items-center max-w-lg ">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <PiPottedPlantThin className="text-gray-800" />
        </div>
        <input
          onChange={handleChangeBtn}
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search A Plant"
          required
        />
      </div>
     
    </form>
  );
}
