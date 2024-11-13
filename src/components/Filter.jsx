import React, {useState} from 'react'
import { IoMdSearch } from "react-icons/io";

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const brands = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "laptops"];

    const handleMinPrice = (e)=>{
        let minValue = e.target.value
        setMinPrice(minValue)
    }
    const handleMaxPrice = (e)=>{
        let maxValue = e.target.value
        setMaxPrice(maxValue)
    }

    const handleSearch=(e)=>{
        const newSearchTerm = e.target.value
        setSearchTerm(newSearchTerm)
    }
  return (
    <div className='filter-section border border-white rounded-lg shadow-md bg-white mx-3 my-3 w-85'>
     <div className="filter-body my-2 mx-2">
      <p className='my-2 mx-2'>Filter</p>
      <div className="brand-section">

      {/* category section */}
      <div className="relative text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex w-full justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <p className='text-tertiary '>Categories</p>
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <div className="w-58 origin-top-right  right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className='searchBar mx-3  py-1 flex items-center border border-black rounded-2xl gap-4 px-1'>
            <IoMdSearch className='ml-2'/>
            <input type="text" placeholder="search" className='border-0 outline-none w-full '
                value={searchTerm} onChange={handleSearch}
            />
        </div>
          <div className="py-1">
            {brands.map((brand, index) => (
              <a
                key={index}
                href={`/brand/${brand.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {brand}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* price section */}
      <div className="price relative text-left">
        <p className='my-2'>Price Range</p>
        <input type="number" placeholder='min' 
        onChange={handleMinPrice} value={minPrice}
        className='w-20 mr-3 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out' />
        To
        <input type="number" placeholder='max' 
        onChange={handleMaxPrice} value={maxPrice}
        className='w-20 ml-3 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out' />
        <p>{minPrice}</p>
        <p>{maxPrice}</p>
      </div>
      </div>

     </div>

    </div>
  )
}

export default Filter
