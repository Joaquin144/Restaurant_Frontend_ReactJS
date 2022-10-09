import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                {
                    menuList.map((curEle)=>{
                        return (
                          <>
                            <button className="btn-group__item" onClick={() => filterItem(curEle)}> {curEle} </button>
                          </>
                        );
                    })
                }
                
                {/* <button className='btn-group__item' onClick={()=>filterItem('lunch')}> Lunch </button>
                <button className='btn-group__item' onClick={()=>filterItem('evening')}> Evening Snacks </button>
                <button className='btn-group__item' onClick={()=>filterItem('dinner')}> Pork </button> */}
                {/* <button className='btn-group__item' onClick={()=>setMenuData(Menu)}> All </button> */}
            </div>
        </nav>
    </>
  )
}

export default Navbar
