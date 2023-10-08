import React, { useState } from 'react';
import './Menucard.css';
import Menu from './../utils/Menu.json';

const Cards = ({ id, img, minimeal, regularmeal, jumbomeal, tittle, type, addToCart, removeFromCart, isItemInCart }) => (
  <div key={id} className="card">
    <img src={img} alt={tittle} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{tittle}</h5>
      <p className="card-text">Type: {type}</p>
      <p className="card-text">Mini Meal: {minimeal}</p>
      <p className="card-text">Regular Meal: {regularmeal}</p>
      <p className="card-text">Jumbo Meal: {jumbomeal}</p>
      <button
        className="btn btn-primary"
        onClick={addToCart}
        disabled={isItemInCart}
      >
        Add to Cart
      </button>
      <button
        className="btn btn-danger"
        onClick={removeFromCart}
        disabled={!isItemInCart}
      >
        Remove from Cart
      </button>
    </div>
  </div>
);

const Menucard = () => {
  const [menu, setMenu] = useState('');
  const [cart, setCart] = useState([]);

  const search = (type) => {
    setMenu(type);
  }

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  }

  const filtermenu = menu ? Menu.filter((menucard) => {
    return menucard.type === menu;
  }) : Menu;

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 background-img">
              {/* ... Your filter menu code ... */}
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="d-flex flex-wrap card-div">
                {filtermenu.map((card, index) => {
                  const { id, img, miniMeal, regularMeal, jumboMeal, tittle, type } = card;
                  const isItemInCart = cart.some((item) => item.id === id);

                  return (
                    <Cards
                      key={id}
                      id={id}
                      img={img}
                      minimeal={miniMeal}
                      regularmeal={regularMeal}
                      jumbomeal={jumboMeal}
                      tittle={tittle}
                      type={type}
                      addToCart={() => addToCart(card)}
                      removeFromCart={() => removeFromCart(id)}
                      isItemInCart={isItemInCart}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menucard;
