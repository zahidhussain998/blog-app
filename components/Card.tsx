import Link from "next/link";

const Card = () => {
  return (
    <div className="bg-white shadow-full rounded-md p-6 border-4 border-blue-500 text-center">
      <div className="relative mb-4">
        <span className="text-gray-500 block mb-2">Promoted</span>
        <hr className="mb-4" />
        <img
          className="h-40 w-40 object-cover mx-auto mb-4"
          src="https://res.cloudinary.com/jerrick/image/upload/v1691336585/64cfbf898dc3fa001d604dc0.png"
          alt="image"
        />
        <h2 className="text-xl font-semibold mb-2 text-black">
          100% Trusted Freelancer
        </h2>
        <Link href="https://www.fiverr.com/zohaibzohaibhus?public_mode=true">
          <p className="text-black text-sm underline decoration-[#0A7DFF] hover:decoration-black">
            Zahid Hussain is a website developer, 100% trustable freelancer
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
