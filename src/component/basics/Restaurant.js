import React from 'react'
import "./style.css"

const myStyle = {color:"red",fontStyle:"italic"}

export const Restaurant = () => {
  return (
    <>
        <div className="card-container">
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>1</span>
                        <span className='card-author subtle' style={myStyle}>Breakfast</span>
                        <h2 className='card-title'>Maggie</h2>
                        <span className='card-description subtle'>Whether you offer marketing, customization, or web design and development services, the Shopify Partner Program will set you up for success. Join for free and access revenue share opportunities, tools to grow your business, and a passionate commerce community.</span>
                        <div className='card-read'>Read</div>
                        <img src={'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.dw.com%2Fimage%2F46284006_101.jpg&sp=1665297922T42eaf31282028754948540f5cc74d55c5a101015bc8923b3536cf01216250df2'} alt="images" className='card-media'/>
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Restaurant;