import Card from "../components/Card";
import Filter from "../components/Filter";

const Products = () => {
  const products = [
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://mac-center.com.pr/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-US_cd3b106e-724d-4b79-8c34-0cd93e66c4d7.jpg?v=1726227139",
    },
  ];
  return (
    <div>
      <div className=" lg:h-96">
        <img
          src="https://images.unsplash.com/photo-1445384763658-0400939829cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" object-cover h-full  w-full"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center my-8 gap-2 w-[90vw] md:w-full lg:w-4/5 md:gap-8 mx-auto lg:mx-2">
        <div className="md:w-1/4">
          <Filter />
        </div>
        <div className="md:w-3/4">
          <div className="card-section grid grid-cols-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 place-items-center gap-3 ">
            {products.map((product) => (
              <div>
                <Card
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
