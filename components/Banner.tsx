function Banner() {
  return (
    <div className=" flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold
    px-10 py-5 mb-10">
      <div className="">
        <h2 className="text-7xl text-white"> Radiant Pulse </h2>
    <h2 className="ml-5 md:mt-0 text-white">welcome to {""}
          <span className=" underline decoration-4 decoration-[#0A7DFF]">
          Radiant Pulse  {""}
          </span>
           {""}
           favourite blog on the Radiant Pulse 
        </h2>
      </div>
      <p className="ml-5 md:mt-2 text-white max-w-sm">
       Our aim is to help you live a more inspired life. Our blog covers a wide range of topics, providing you with information and inspiration on various subjects
      </p>
    </div>
  );
}

export default Banner;
