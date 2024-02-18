// components/Card.js

const Card = () => {
    return (
      <div className="bg-white shadow-md rounded-md p-6 sticky top-10">
        {/* <img
          src="icon.png"
          alt="Image of a book cover"
          className="w-full h-32 object-cover rounded-md mb-4"
        /> */}
        <h2 className="text-xl font-semibold mb-2 text-black">this is the new card components</h2>
        <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim eu
            nunc elementum tempus.
        </p>
      </div>
    );
  };
  
  export default Card;
  