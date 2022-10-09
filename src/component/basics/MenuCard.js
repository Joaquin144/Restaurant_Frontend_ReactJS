import React from 'react'
import "./style.css"

const myStyle = {color:"red",fontStyle:"italic"}

const MenuCard = ({menuData}) => {
  return (
    <>
        <section className='menu-card--container'>
        {menuData.map((curEle) => {
            return(
                <>
                    <div className="card-container" key={curEle.id}>
                    <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{curEle.id}</span>
                        <span className='card-author subtle' style={myStyle}>
                            {curEle.category}
                        </span>
                        <h2 className='card-title'>{curEle.name}</h2>
                        <span className='card-description subtle'>{curEle.description}</span>
                        <div className='card-read'>Read</div>
                        <img src={curEle.image} className='card-media'/>
                        {/* <img src={''} className='card-media'/> */}
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                    </div>
                    </div>
                </>
            )
        }) }
        </section>
    </>
  )
};

export default MenuCard