import Link from "next/link";

const Card = () => {
  return (
    
    <div className="flex justify-start items-start ">
      <div className="bg-white shadow-full rounded-md p-6 border-4 border-blue-500">
        <div className="relative mb-4">
          <span className="text-gray-500">Promoted</span>
          <hr />
          <img
            className="h-30 w-20 object-cover"
            src="https://res.cloudinary.com/jerrick/image/upload/v1691336585/64cfbf898dc3fa001d604dc0.png"
            alt="image"
            
          />
          <h2 className="text-xl font-semibold mb-2 text-black">
            100% trusted freelancer
          </h2>
          <Link href="https://www.fiverr.com/zohaibzohaibhus?public_mode=true">
            <p className="text-black text-sm outline-slate-800 underline-[#0A7DFF]">
              zahid hussain is an website developer 100% trustable freelancer
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;