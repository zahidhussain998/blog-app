import Image from "next/image";
function Banner() {
  return (
    <div className=" flex items-center flex-col lg:flex-row lg:space-x-5 justify-between font-bold
    px-10 py-5 mb-10 max-w-7xl  mt-5 p-5">
      <div className="">
        <h2 className="text-7xl "> Stay inquisitive </h2>
    <h2 className="ml-2 md:mt-3 ">welcome to {""}
          <span className=" underline decoration-4 decoration-[#0A7DFF]">
          Netialap {""}
          </span>
           {""}
           Uncover a wealth of stories and knowledge with us    
           
               </h2>

          
      </div>
        <img
                  src="/sh.png"
          alt="banner"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hidden md:inline-flex h-80 w-80 lg:h-full "
        />
   
    </div>
  );
}

export default Banner;
