import React, { useState } from 'react'
import Menu from './MenuApi.js'
import MenuCard from './MenuCard'  
import Navbar from './Navbar.js';


const uniqueList = [...new Set(Menu.map((curEle)=>{
  return curEle.category
})),
"All"
];

export const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);//StateManagement with ReactHooks
    const filterItem = (category) => {
      if(category === "All"){
        setMenuData(Menu)
        return
      }
      const updatedList = Menu.filter((curEle) => {
        return curEle.category === category//return true only if both matches to the filter lambda parameter
      })
      setMenuData(updatedList)
    }

    const [menuList,setMenuList] = useState(uniqueList);

  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;