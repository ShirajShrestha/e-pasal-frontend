import React from 'react'

const Cart = () => {
  return (
    <div className='carts'>
    <div className="cart flex justify-center">
        <div className="image w-[5rem]">
            <img src="https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        <div className="cart-body mx-2">
        <p>this is some content</p>
        
        </div>
        <div className='price mx-2'>
            price
        </div>
        <div className='quantity'>
            Quantity
        </div>
    </div>

    </div>
  )
}

export default Cart
