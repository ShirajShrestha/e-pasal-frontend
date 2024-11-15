import Card from "../components/Card";
import Filter from "../components/Filter";

const Products = () => {
  const products = [
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: "10.99",
      brand: "abc",
      image:
        "https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
      <div className="flex flex-col md:flex-row justify-center align my-8 gap-2 w-[90vw] md:w-full m-auto lg:w-4/5 lg:mx-auto">
        <div className="md:w-1/4">
          <Filter />
        </div>
        <div className="md:w-3/4">
          <div className="card-section grid grid-cols-2 md:grid-cols-3 lg:gap-3 lg:grid-cols-4 place-items-center gap-3">
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
