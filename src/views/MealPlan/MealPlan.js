import React from 'react'
import './MealPlan.css';
import Menu from './../utils/Menu.json'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

export default function MealPlan() {
    const { id } = useParams();
    const [card, setCard] = useState({})

    useEffect(() => {
        Menu.forEach((card) => {
            if (card.id == id) {
                setCard(card);
            }
        })
    }, [id]);
    return (
        <>
            <div className='container-fluid text-center'>
                <h2 className='mealplan-head'>MealPlan</h2>
                <div className="row">
                    <div className="col card-container">
                        <img src="https://t4.ftcdn.net/jpg/04/16/35/37/360_F_416353748_WjF5IlnLOTDz36UrfrHv0HhW0XB0ML7j.webp" className='img-tiffin' />
                        <div className='daywise-price-div'>
                            <h3>meal-price</h3>
                            <div className='daywise-price'>
                                <div>✅</div>
                                <div>2 day</div>
                                <div>7 day</div>
                                <div>15 day</div>
                                <div>13 day</div>
                            </div>
                            <div className=''>

                                <div className='prices'>
                                    <div>mini</div>
                                    <div>Rs.220</div>
                                    <div>Rs.735</div>
                                    <div>Rs.1500</div>
                                    <div>Rs.2850</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col cardlist-container">
                        <h3>cardList</h3>
                    </div>
                </div>
            </div>

        </>

    )
}

