function Banner() {
  return (
    <div className=" flex items-center flex-col lg:flex-row lg:space-x-5 justify-between font-bold
    px-10 py-5 mb-10 max-w-7xl  ">
      <div className="">
        <h2 className="text-7xl "> Stay inquisitive </h2>
    <h2 className="ml-2 md:mt-3 ">welcome to {""}
          <span className=" underline decoration-4 decoration-[#wndkosaldk]">
          Netialap {""}
          </span>
           {""}
           Uncover a wealth of stories and knowledge with us        </h2>
      </div>
        <img
          src="/n.png"
          alt="banner"
          className="hidden md:inline-flex h-60 w-60 lg:h-full "
        />

    </div>
  );
}

export default Banner;
