import React, { useState } from 'react'
import Menu from './MenuApi.js'
import MenuCard from './MenuCard'  


const uniqueList = [...new Set(Menu.map((curEle)=>{
  return curEle.category
}))];

export const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);//StateManagement with ReactHooks
    const filterItem = (category) => {
      const updatedList = Menu.filter((curEle) => {
        return curEle.category === category//return true only if both matches to the filter lambda parameter
      })
      setMenuData(updatedList)
    }

  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={() => filterItem('breakfast')}> Breakfast </button>
                <button className='btn-group__item' onClick={()=>filterItem('lunch')}> Lunch </button>
                <button className='btn-group__item' onClick={()=>filterItem('evening')}> Evening Snacks </button>
                <button className='btn-group__item' onClick={()=>filterItem('dinner')}> Pork </button>
                <button className='btn-group__item' onClick={()=>setMenuData(Menu)}> All </button>
            </div>
        </nav>
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;