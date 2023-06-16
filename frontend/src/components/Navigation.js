import React from 'react';
import logo from '../assets/vectors/logo.svg'
import cart from '../assets/vectors/cart.svg'
import logo2 from  '../assets/vectors/logo2.svg'
import search from '../assets/vectors/search.svg'
const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo_navv">
                <div className="logo">
                    <img className="" src={logo} draggable="false"/>

                </div>
                <div className="navv">
                    <div className="navv_link">Все</div>
                    <div className="navv_link ">Мужчинам</div>
                    <div className="navv_link">Женщинам</div>
                </div>
            </div>
            <div className="logo2">
                <img className="logo2" src={logo2} draggable="false"/>

            </div>
            <div className="gbhjk">
                <div className="nav_authorization">
                    <div className="authorization">
                        <div className="navv_link ertyuuu">Вход</div>
                        <div className="vgbhjk ertyuuuu"></div>
                        <div className="navv_link ">Регистрация</div>
                    </div>
                    <div className="nav_search">
                        <img src={search} draggable="false"/>
                         <img src={cart} draggable="false"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;