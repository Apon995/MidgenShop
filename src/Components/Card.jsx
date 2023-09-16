import React from 'react';
import propsTypes from 'prop-types'

function Card({ items, handleTOaddCart }) {

  const { product_id, product_img, product_price, product_name } = items;
  return (
    <>
      <div className='border-[1px] border-[#adadad] shadow-lg bg-white px-2 py-2 rounded-lg'>
        <img src={product_img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WhCtGrgxoZLgy-B2Jg010RtHh9zhVxIsdg&usqp=CAU'} alt={product_name} className='mx-auto w-[400px] h-[200px] rounded-md' />
        <hr />
        <div className='space-y-1 py-2'>
          <p>Product Name :{product_name} </p>
          <p>Product price :{product_price} </p>
          <p>Product id : {product_id}</p>
          <br />
          <div className='text-center'>
            <button onClick={() => handleTOaddCart(items, product_price, product_id)} className="bg-[#C2EFD4] px-3 py-2 rounded-md text-base font-medium">add to cart <i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>



    </>
  )
}

Card.propsTypes = {
  items: propsTypes.object.isRequired,
  handleTOaddCart: propsTypes.func.isRequired
}


export default Card