import { useState } from "react";
import { FiHeart, FiSend } from "react-icons/fi";

const Details = () => {
  const [toggleReview, setToggleReview] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  return (
    <div>
      {/* Image and details section  */}
      <div className="flex flex-col lg:flex-row m-4 lg:mx-20">
        <div className="flex-1 ">
          <img
            src="https://images.unsplash.com/photo-1730727384555-35318cb80600?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image-name"
            className="lg:w-96 object-cover m-auto rounded-md"
          />
        </div>
        <div className="flex-1  p-4 font-semibold">
          <p className="font-bold text-2xl">
            Nike Dri-Fit Training Jacket Winter Special Kit
          </p>
          <div className="flex items-center justify-between pb-4">
            <p className="font-semibold text-gray-600 ml-2 ">Brand: Nike</p>
            <FiHeart className="text-xl cursor-pointer hover:text-accent" />
          </div>
          <p className="text-xl font-bold">Rs 900</p>
          <p className="mb-4">
            <span className="line-through text-gray-500">Rs 1000 </span>
            <span className="text-red-600"> 10&#37; discount</span>
          </p>
          <p className="text-gray-500 mb-4">
            Stock: <span className="text-black">5</span>{" "}
          </p>
          <div className="mb-4">
            <p className="font-bold mb-1">Qty</p>
            <div>
              <span
                className="border border-black px-2 py-1 rounded cursor-pointer"
                onClick={decreaseQuantity}
              >
                -
              </span>
              <span className="m-1">{quantity}</span>
              <span
                className="border border-black px-2 py-1 rounded cursor-pointer"
                onClick={increaseQuantity}
              >
                +
              </span>
            </div>
          </div>
          <button className="bg-accent w-full my-2 rounded-md p-2 text-white  font-normal">
            Add to cart
          </button>
        </div>
      </div>

      {/* Description and Review section  */}
      <div className="rounded-md m-4 shadow-lg mb-8 lg:mx-20 border border-gray-200">
        <section className="flex items-center justify-around border border-bottom shadow-md p-1 cursor-pointer">
          <div
            className={
              toggleReview === "description" &&
              "text-accent underline underline-offset-4 "
            }
            onClick={() => setToggleReview("description")}
          >
            Descriptions
          </div>
          <div
            onClick={() => setToggleReview("review")}
            className={
              toggleReview === "review" &&
              "text-accent underline underline-offset-4"
            }
          >
            Reviews
          </div>
        </section>

        {/* Conditional description and review rendering */}
        {toggleReview === "description" ? (
          <section className="p-4 min-h-[200px] max-h-[400px] overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            adipisci accusamus error expedita aut quia voluptatem officiis
            eveniet, fugiat provident temporibus. Libero sit aperiam assumenda
            ullam omnis quia doloremque ipsum.
          </section>
        ) : (
          <div className="px-4 my-4 min-h-[200px] max-h-[400px] overflow-y-auto">
            {/* post a review */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                alt=""
                className="w-8 h-8 rounded-full object-cover border border-black"
              />
              <div className="flex border border-black w-full lg:w-1/2 rounded-3xl pl-2 pr-1 py-1">
                <input
                  type="text"
                  placeholder="Leave a comment..."
                  className="p-1 w-full outline-none border-none"
                />
                <button className="bg-accent p-2 rounded-full">
                  <FiSend />
                </button>
              </div>
            </div>
            {/* reviews for this product */}
            <div className="flex gap-2 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="bg-gray-300 p-2 rounded-lg">
                The quality of the product is very good. I really like it. There
                has not been any problem with the product. I recommend it to
                everyone
              </p>
            </div>
            <div className="flex gap-2 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="bg-gray-300 p-2 rounded-lg">Very good product.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
