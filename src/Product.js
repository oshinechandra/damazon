import React from 'react';
import "./Product.css";


function Product() {
  return(
  <div className='Product'>
      <div className='product__info'>
          <p>The Lean Startup</p>
          <p className='product__price'>
              <small>$</small>
              <strong>20</strong>
          </p>
          <div className='product__rating'>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>  
          </div>
      </div>
      <img
      src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt=""></img>
        <button>Add to Basket</button>
  </div>
  );
}

export default Product;
