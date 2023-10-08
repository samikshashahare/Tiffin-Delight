import React, { useEffect, useState } from 'react';
import './MealPlan.css';
import Menu from './../utils/Menu.json';
import { useParams } from 'react-router-dom';

export default function MealPlan() {
    const { id } = useParams();
    const [card, setCard] = useState({});

    useEffect(() => {
        const selectedCard = Menu.find((menuItem) => menuItem.id.toString() === id);

        if (selectedCard) {
            setCard(selectedCard);
        } else {
            // Handle the case where the menu item with the given 'id' is not found.
            console.error(`Menu item with id ${id} not found.`);
        }
    }, [id]);

    return (
        <div className='container-fluid text-center'>
            <h2 className='mealplan-head'>MealPlan</h2>
            <div className="row">
                <div className="col card-container">
                    <img src={card.img} className='img-tiffin' alt={card.title} />
                    <div className='daywise-price-div'>
                        <h1>{card.mini && card.mini["day 2"] ? card.mini["day 2"] : 'N/A'}</h1>
                        <h1>{card.mini && card.mini["day 7"] ? card.mini["day 7"] : 'N/A'}</h1>
                        <h1>{card.mini && card.mini["day 15"] ? card.mini["day 15"] : 'N/A'}</h1>
                        <h1>{card.mini && card.mini["day 30"] ? card.mini["day 30"] : 'N/A'}</h1>




                        {/* <h3>meal-price</h3>
                        <div className='daywise-price'>
                            <div>✅</div>
                            <div>2 day</div>
                            <div>7 day</div>
                            <div>15 day</div>
                            <div>13 day</div>
                        </div> */}
                        {/* <div className=''>
                            <div className='prices'>
                                <div>mini</div>
                                <div>Rs.220</div>
                                <div>Rs.735</div>
                                <div>Rs.1500</div>
                                <div>Rs.2850</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col cardlist-container">
                    <h3>cardList</h3>
                </div>
            </div>
        </div>
    );
}
