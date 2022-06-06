import React from 'react';
import './styles/Second.css';
import b2 from './assets/b2.png'
import b4 from './assets/b4.png'


const Second = () => {
    return (
        <section className='second-section'>
            <div className="second-container">

            <div className="card">
                <img src={b2} alt="" />
                <p>Coleslaw</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b2} alt="" />
                <p>Celery Victor</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b2} alt="" />
                <p>Chef Salad</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b4} alt="" />
                <p>Green Salad</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b4} alt="" />
                <p>Bound Salad</p>
                <button>Order</button>
            </div>


            <div className="card">
                <img src={b4} alt="" />
                <p>Spinach Salad</p>
                <button>Order</button>
            </div>


            </div>
        </section>
    )
}

export default Second