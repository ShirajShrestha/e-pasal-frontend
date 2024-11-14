import Card from "../components/Card";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      {/* <Navbar />
      <div className=" lg:max-h-[40vh] sm:max-h-[10vh] sm:overflow-hidden sm:w-screen ">
        <img src="https://images.unsplash.com/photo-1445384763658-0400939829cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="lg:h-[40vh] object-cover overflow-hidden  w-full" />
      </div>
      <div className="lg:flex  sm:justify-center">
        <div className="sm:w-[39vw]">
      <Filter/>
      </div>
      <div>
      <Card/>
      </div>

      </div> */}

      <Cart/>
      {/* <Footer/> */}
      
    </>
  );
};

export default Home;
