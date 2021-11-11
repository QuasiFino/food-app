import React from 'react';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../componets/MenuItem';
import '../styles/Menu.css'; 

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Items Available</h1>
            <div className="menuList">
                {MenuList.map((menuItem, index) => {
                    return (
                        <MenuItem 
                            key={index}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        /> 
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;
