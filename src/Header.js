import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
            <div className='header__search'>
                <input className='header__searchInput' type="text"></input>
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionone'>Hello Guest</span>
                    <span className='header__optiontwo'>Sign in</span>

                </div>
                <div className='header__option'>
                    <span className='header__optionone'>Returns</span>
                    <span className='header__optiontwo'>& Orders</span>

                </div>
                <div className='header__option'>
                    <span className='header__optionone'>Your</span>
                    <span className='header__optiontwo'>Prime</span>

                </div>
                <div className='header__optionBasket'>
                  <ShoppingBasketIcon />
                  <span className='header__optiontwo header__basketCount'>0</span>
                </div>

            </div>
        </div>
    );

}

export default Header;

