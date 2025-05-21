import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carditems from './Carditems'
import './Cards.css'

function Cards() {
  return (
    <div className = 'cards'>
        <div className = 'cards__container'>
            <div className="cards__wrapper">
                <div className="cards__items">
                  
                    <Carditems />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Cards;
