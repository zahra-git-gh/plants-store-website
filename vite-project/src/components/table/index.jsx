import { Tbody } from "./Tbody";
import { Tfoot } from "./Tfoot";
import { Thead } from "./Thead";

export function TableOrders() {
    return (
      <>
        <div className="w-full h-max px-4 py-16 min-[600px]:px-24">
        <div className="overflow-x-auto h-max shadow-lg rounded-lg">
          <table className=" table-auto border-solid border border-gray-200  w-[540px] min-[600px]:w-full rounded-lg">
            {/* thead */}
            <Thead/>
            {/* tbody */}
            <Tbody/>
            <Tfoot/>
          </table>
        </div>
          
        </div>
       
      </>
    );
  }