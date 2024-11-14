import React from 'react'
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  return (
    <div className='carts ml-[4rem]'>
    <div className="cart flex px-[2rem] py-[0.4rem] border border-white  shadow-[0_4px_8px_rgba(0,0,0,0.06)] w-[60vw] my-5 pt-3">
        <div className="image w-[15%]">
            <img src="https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        <div className="cart-body w-[85%] flex mx-2">
        <div className="description w-[50%] mx-2">
        <p>this is some contwwwt sss sdssd fsfs fs fsf dsd dsd fdfdf fbsdhjfbsd</p>
        </div>
        <div className='price flex flex-col items-center mx-4 w-[25%]  '>
            <p className='text-primary'>Rs 300</p>
            <button className='pt-4'><FiTrash2 /></button>
        </div>
        <div className='quantity w-[25%] flex justify-center'>
            Qty: 1
        </div>
        </div>
    </div>

    <div className="cart flex px-[2rem] py-[0.4rem] border border-white  shadow-[0_4px_8px_rgba(0,0,0,0.06)] w-[60vw]">
        <div className="image w-[15%]">
            <img src="https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        <div className="cart-body w-[85%] flex mx-2">
        <div className="description w-[50%] mx-2">
        <p>this is some contwwwt sss sdssd fsfs fs fsf dsd dsd fdfdf fbsdhjfbsd</p>
        </div>
        <div className='price flex flex-col mx-4 w-[25%] items-center justify-center'>
            <p className='text-primary'>Rs 300</p>
            <button className='pt-4'><FiTrash2 /></button>
        </div>
        <div className='quantity w-[25%] flex justify-center'>
            Qty: 1
        </div>
        </div>
    </div>

    </div>
  )
}

export default Cart
