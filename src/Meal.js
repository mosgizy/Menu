import React from 'react'

const Meal = ({ img, name, about, price }) => {
    return (
        <article>
            <div className="meal-wrapper">
                <div className="img-wrapper">
                    <img src={img} alt={name} />
                </div>
                <div className="info">
                    <header className='meal-info'>
                        <div className="meal-name">{name}</div>
                        <div className="price">{price}</div>
                    </header>
                    <div className="about">{ about}</div>
                </div>
            </div>
        </article>
    )
}

export default Meal
