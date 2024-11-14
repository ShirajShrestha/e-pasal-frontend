import "../App.css";

const Card = ({ name, brand, price, image }) => {
  return (
    <div className="h-52 w-38 md:h-72 md:w-48 shadow-lg">
      <div className="h-3/4">
        <img
          src={image}
          className="w-full h-full  rounded-lg"
          alt=""
        />
      </div>

      <div className="h-1/4">
          <p className="text-sm text-gray-500 ml-6">
            {brand}
          </p>
        <div className="flex justify-around items-center">
          <h5 className="font-semibold">{name} </h5>
          <p className="mt-[7px] text-[0.84rem] text-[#3095f9]">
            Price:{price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
