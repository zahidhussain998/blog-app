import Link from "next/link";





const Card = () => {
  return (
    <div className="justify-start items-start hidden px-4 lg:block lg:w-1/5">

<div className="bg-white shadow-full rounded-md p-6 sticky h-20">
  <div className="relative mb-4 hidden h-[250px] delay-lg border border-[0A7DFF] ">
      <span className="text-gray-500 ">Promoted</span>
      <hr/>
      <img
        className="h-30 w-20"
        src="https://res.cloudinary.com/jerrick/image/upload/v1691336585/64cfbf898dc3fa001d604dc0.png"
        alt="image"
      />
      <h2 className="text-xl font-semibold mb-2 text-black">
        100% trusted freelancer
      </h2>
      <Link href="https://www.fiverr.com/zohaibzohaibhus?up_rollout=true">
        <p className="text-black text-sm outline-slate-800">
          zahid hussain is an website developer 100% trustable freelancer
        </p>
      </Link>

  </div>
    </div>
    </div>
  );
};

export default Card;
