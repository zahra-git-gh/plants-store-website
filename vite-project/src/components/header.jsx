import { Navbar } from "./navbar";

// import moduleName from '';
export function Header() {
  return (
    <div className="bg-cover bg-center flex flex-col   bg-[url('../../src/assets/hero-bg.jpg')] rounded-b-3xl x-sm:h-[450px] sm:h-[520px] md:h-[650px] sm:gap-y-20">
      <Navbar />
      <div className="flex flex-row justify-evenly">
        <div className="ms-10 sm:w-5/12 flex flex-col gap-6 pt-8 md:w-[506px] md:ms-16">
          <h6 className="md:text-xl">Best Quality Plants</h6>
          <h1 className="text-3xl font-normal leading-relaxed md:text-6xl ">
            Amazing Variety Of Plants Starting Just $12
          </h1>
          <button className="rounded-full shadow-lg bg-red-400 text-white py-2 px-6 w-2/3 md:w-2/5">
            SHOP NOW
          </button>
        </div>
        <div className="hidden sm:block sm:w-5/12 md:w-1/4"></div>
      </div>
    </div>
  );
  // return <p className="text-sky-400">hello</p>
}
