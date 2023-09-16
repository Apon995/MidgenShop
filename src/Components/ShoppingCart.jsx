import React from 'react'

import propsTypes from 'prop-types';

function ShoppingCart({ AddProducts, Total, handleTOremove }) {



  return (
    <>
      <div className='border-[2px] border-[#adadad] px-2 py-2 h-fit rounded-md'>
        <h1 className='text-base text-black font-medium'>Total Cart quantity : {AddProducts.length}</h1>
      </div>
      <br />
      {/* <li className='bg-[#C2EFD4] px-2 py-3 text-black font-medium rounded-md'>products cosmetic & price is 00</li> */}
      <div className='border-[2px] border-[#adadad] px-2 py-2 rounded-md'>
        <h1 className='text-xl text-[#111] font-semibold text-center mb-4'>Products Name & price</h1>
        <ul className='space-y-3 list-inside list-[number]' >
          {AddProducts.map((product, index) => <li id='item-list' key={index} className='bg-[#C2EFD4] px-2 py-3 text-black font-medium rounded-md'>{product.product_name} & price is {product.product_price}  <button onClick={() => handleTOremove(product.product_id)} className='text-base font-bold float-right '><i className="fa-solid fa-trash-can"></i></button></li>)}
        </ul>
      </div>

      <br />
      <div className='border-[2px] border-[#adadad] px-2 py-2 h-fit rounded-md'>
        <h1 className='text-base text-black font-medium'>Total price : {Total.toFixed(2)}</h1>
      </div>

    </>
  )
}

ShoppingCart.propsTypes = {
  AddProducts: propsTypes.array.isRequired,
  Total: propsTypes.number,
  handleTOremove: propsTypes.func.isRequired
}

export default ShoppingCart