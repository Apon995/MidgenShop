import React, { useState, useEffect } from "react";
import Products from "./Products.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import { SaveToStroge, getItemStroge, removeTostroge } from "../Utilities/Stored.js";


function Home() {
  const [Product, SetProducts] = useState([]);
  const [AddProducts, setAddProducts] = useState([]);
  const [Total, setTotal] = useState(0);

  const handleTOaddCart = (items, product_price, product_id) => {
    let newproducts = [...AddProducts, items];
    setAddProducts(newproducts);

    SaveToStroge(product_id)

    let num = parseFloat(product_price);

    setTotal(Total + num);
  };

  useEffect(() => {
    if (Product.length) {
      let items = getItemStroge();
      let arr = [];
      items.forEach(id => {

        let Findarr = Product.find((product) => product.product_id === id);
        arr.push(Findarr);


      });

      setAddProducts(arr)
      let a = arr.reduce((i, product) => i + product.product_price, 0);

      setTotal(a)
    }
  }, [Product])

  const handleTOremove = (id) => {

    let reamining = AddProducts.filter((product) => product.product_id !== id);
    setAddProducts(reamining);
    SaveToStroge(id)


    let duplicate = AddProducts.filter((product) => product.product_id == id);
    let addition = duplicate.reduce(
      (accumulator, product) => accumulator + product.product_price,
      0
    );

    setTotal(Total - addition);


    removeTostroge(id)
  };

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => SetProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <br />
      <h1 className="text-2xl font-bold text-center">All Products </h1>
      <br />
      <section className="lg:px-[2%] md:px-[2%] px-[2%]">
        <div className="flex lg:gap-4 md:gap-2 gap-4 md:flex-row flex-col-reverse">
          <div className="lg:w-[70%] md:w-[65%] w-full ">
            <Products Product={Product} handleTOaddCart={handleTOaddCart} />
          </div>
          <div className="lg:w-[30%] md:w-[35%] w-full">
            <ShoppingCart
              AddProducts={AddProducts}
              Total={Total}
              handleTOremove={handleTOremove}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
