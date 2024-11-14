import { FaMobile, FaShirt, FaUtensils } from "react-icons/fa6";
import { FiShoppingBag, FiWatch } from "react-icons/fi";
import { GiPerfumeBottle } from "react-icons/gi";
import { PiPants, PiSneaker } from "react-icons/pi";
import {
  SiAdidas,
  SiApollographql,
  SiApple,
  SiDior,
  SiHandm,
  SiLg,
  SiNike,
  SiPuma,
} from "react-icons/si";

const Landing = () => {
  return (
    <div className="">
      {/* Hero section  */}
      <section className="relative h-[90vh] bg-gray-900 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445384763658-0400939829cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Style with Our Exclusive Collections!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your One-Stop Shop for Everything You Love
          </p>
          <button className="px-8 py-3 bg-accent hover:bg-primary text-white font-semibold rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      <div className="w-4/5 m-auto">
        {/* Category section ? */}
        <section className="my-8 ">
          <div className="flex flex-col my-4 md:flex-row w-full ">
            <h2 className="text-2xl font-bold mb-4 md:w-1/3 md:ml-8">
              Shop by Category
            </h2>
            <div className="grid grid-cols-4 gap-2 md:w-2/3 md:mr-20 ">
              <div className="flex items-center border border-gray-400 p-1 rounded-lg justify-center ">
                <FaShirt className="text-accent mr-1" />
                <span className="hidden md:inline-block">Shirts</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <GiPerfumeBottle className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Perfume</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <FiWatch className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Accessories</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <FiShoppingBag className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Bags</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <PiPants className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Pants</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <PiSneaker className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Sneakers</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <FaMobile className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Gadgets</span>
              </div>
              <div className="flex items-center border border-gray-400 px-1 rounded-lg py-0.5 justify-center">
                <FaUtensils className="text-accent mr-1" />{" "}
                <span className="hidden md:inline-block">Kitchen</span>
              </div>
            </div>
          </div>
          <p className="text-accent ml-4 md:ml-8 cursor-pointer">See more</p>
        </section>

        {/* New arrival section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4 md:ml-8">New Arrivals</h2>
          <div className="flex flex-wrap justify-center gap-4 lg:mx-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-lg shadow-md h-auto w-32 md:w-64">
              <img
                src="https://images.unsplash.com/photo-1628861997457-db259d8322ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product-image"
                className="object-cover w-full h-48 md:h-80 rounded-t-lg"
              />
              <div className="mt-2 text-center">
                <p className="font-semibold">Clothes</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-lg shadow-md h-auto w-32 md:w-64">
              <img
                src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product-image"
                className="object-cover w-full h-48 md:h-80 rounded-t-lg"
              />
              <div className="mt-2 text-center">
                <p className="font-semibold ">Cosmetics</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-lg shadow-md h-auto w-32 md:w-64">
              <img
                src="https://images.unsplash.com/photo-1699571182719-b0a8c4636fa9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product-image"
                className="object-cover w-full h-48 md:h-80 rounded-t-lg"
              />
              <div className="mt-2 text-center">
                <p className="font-semibold ">Toys</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center rounded-lg shadow-md h-auto w-32 md:w-64">
              <img
                src="https://images.unsplash.com/photo-1603210119709-26103832d0e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product-image"
                className="object-cover w-full h-48 md:h-80 rounded-t-lg"
              />
              <div className="mt-2 text-center">
                <p className="font-semibold">Gadgets</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand section  */}
        <section className="my-8 ">
          <h2 className="text-2xl font-bold mb-4 md:ml-8">Product Brands</h2>
          <div className="grid grid-cols-4 gap-3 md:w-2/3 lg:w-4/5 m-auto text-5xl px-1">
            <SiAdidas />
            <SiPuma />
            <SiNike />
            <SiApollographql />
            <SiDior />
            <SiHandm />
            <SiLg />
            <SiApple />
          </div>
        </section>

        {/* Deals section  */}
        <section className="my-8 ">
          <h2 className="text-2xl font-bold mb-4 md:ml-8">Featured Deals</h2>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="md:w-1/2 bg-secondary flex flex-col md:flex-row p-6 rounded-xl gap-1 md:items-end">
              <div className=" md:w-1/2 text-white ">
                <p className="font-bold text-xl mb-2">
                  Indulge in exclusive deals
                </p>
                <p>Shop now and enjoy latest fashion finds.</p>
                <button className="px-2 py-1 rounded-xl text-white bg-primary my-2 w-1/2">
                  Shop now
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 bg-primary p-6 rounded-xl gap-1 flex flex-col md:flex-row md:items-end">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661551445894-16ad21e85b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="md:w-1/2 text-white pl-2">
                  <p className="font-bold text-xl mb-2">
                    Welcome offer just for you
                  </p>
                  <p>Enjoy a special discount on your first purchase.</p>
                  <button className="px-2 py-1 rounded-xl text-white bg-secondary my-2 w-1/2">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
