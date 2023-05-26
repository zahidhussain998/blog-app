function Banner() {
  return (
    <div className=" flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold
    px-10 py-5 mb-10">
      <div className="">
        <h2 className="text-7xl"> Radiant Pulse </h2>
        <h2 className="ml-5 md:mt-0">
          welcome to {""}
          <span className=" underline decoration-4 decoration-[#F7AB0A]">
            EveryOne{" "}
          </span>
          {""}
          favourite blog on the RadiantPulse 
        </h2>
      </div>
      <p className="ml-5 md:mt-2 text-gray-400 max-w-sm">
        latest information and inspiration on topics Our aim is to help you live
        a more and Our blog covers a wide range of topics,
      </p>
    </div>
  );
}

export default Banner;
