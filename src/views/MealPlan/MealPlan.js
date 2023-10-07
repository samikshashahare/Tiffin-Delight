import React from 'react'
import './MealPlan.css';
import Menu from '../utils/Menu.json'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

export default function MealPlan() {
    const { id } = useParams();
    const [card, setCard] = useState({})

    useEffect(() => {
        Menu.forEach((card) => {
            if (card.id === id) {
                setCard(card);
            }
        })
    }, [id])
    return (


        <div className="container-fluid text-center mealplan-container">

            <h1 className='mealplan-head'>MealPlan</h1>

            <div className="row">
                <div className="col card-div">
                    <h2>card</h2>
                </div>

                <div className="col addtocard-div">
                    <h2>AddToCard</h2>
                </div>
            </div>
        </div>



    )
}

