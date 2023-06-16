import React from 'react';
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

const HomeBlock = () => {
    return (
        <div className="block_one_main">


            <div className="block_one">
                <div className="block_offer">
                    <div className="discription">Все самые стильные кроссовки находятся в одном месте!</div>
                    <div className="offer">
                        <div className="offer_text">Откройте что-то новое для себя в нашем магазине <span
                            className="spn">ShipShop</span></div>
                        <div className="btn_block">



                            <Link to={'/catalog'}>
                                <button className="btn_one"  type="submit">Популярные кроссовки</button>

                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomeBlock;