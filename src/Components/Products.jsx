import React from 'react'
import Card from './card'
import propTypes from 'prop-types';



function Products({ Product: product, handleTOaddCart }) {

  return (
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 mg:gap-3 gap-6'>

        {
          product.map((items, index) => <Card key={index} items={items} handleTOaddCart={handleTOaddCart} />)
        }

      </div>


    </>
  )
}

Products.propTypes = {

  Product: propTypes.array.isRequired,
  handleTOaddCart: propTypes.func.isRequired
}
export default Products