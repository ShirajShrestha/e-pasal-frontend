import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchProducts, setProducts } from "../stores/productSlice";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Products = () => {
  const dispatch = useDispatch();
  let api = process.env.REACT_APP_API_BASE_URL;

  const [products, setProducts] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({
    next_page_url: null,
    prev_page_url: null,
  });

  // Fetch products from the API
  const fetchProductsFromApi = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      setProducts(data.data);
      setPaginationInfo({
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
      });
      dispatch(fetchProducts(data.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Initial load
  useEffect(() => {
    fetchProductsFromApi(`${api}/products`);
  }, [api]);

  //Pagination
  const handlePrevPage = () => {
    if (paginationInfo.prev_page_url) {
      fetchProductsFromApi(paginationInfo.prev_page_url);
    }
  };
  const handleNextPage = () => {
    if (paginationInfo.next_page_url) {
      fetchProductsFromApi(paginationInfo.next_page_url);
    }
  };
  return (
    <div>
      {/* Banner Image */}
      <div className="lg:h-96">
        <img
          src="https://images.unsplash.com/photo-1445384763658-0400939829cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center my-8 gap-4 w-[90vw] md:w-full lg:w-4/5 mx-4">
        {/* Filter Section */}
        <div className="md:w-1/4">
          <Filter />
        </div>

        {/* Products Section */}
        <div className="md:w-3/4">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  image={product.image_urls?.[0]}
                  id={product.id}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </div>
      {/* Prev and Next Buttons */}
      <div className="flex justify-center align-center my-8 gap-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={!paginationInfo.prev_page_url}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
          onClick={() => handleNextPage()}
          disabled={!paginationInfo.next_page_url}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
