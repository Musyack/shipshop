import React, {useEffect, useState} from 'react';
import {listProducts} from "../actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import Product from "../components/Product";
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Loader from "../components/Loader";
import Message from "../components/Message";
function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 5000;
const CatalogScreen = ({match}) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()
    const [total, setTotal] = useState('')

    const [value1, setValue1] = useState([20000, 37000]);
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList


    // function filterItemsPrice (filter){
    //     switch (filter){
    //         case 'high':
    //             products.filter(item => item == 1)
    //     }
    // }

    useEffect(() => {
        setTotal(products.length)
    }, [products    ])


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber, filter))

    }, [dispatch, keyword, pageNumber, filter])

    return (
        <div className="block_block">

            <div className="lkjhgf">
                <div className="block_basket_contant_offer padd2">Каталог Кроссовок</div>
                <div className="block_links">{total} товаров</div>
            </div>


            <div className="filters_box">
                <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Сортировка</div>

                        <select onChange={e => setFilter(e.target.value)} className={'selector-box-one boxes'}>
                            <option className={'select-item'} value={'high'}>Цена по возрастанию</option>
                            <option className={'select-item'} value={'low'}>Цена по убыванию</option>
                            <option className={'select-item'} value={'alpha'}>По алфавиту</option>

                        </select>


                </div>
                <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Ценовой диапазон</div>

                        <Box width={300}>
                            <Slider
                                getAriaLabel={() => 'Minimum distance shift'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                                style={{color: '#98EF27'}}
                                min={7500}
                                max={200000}
                                step={10000}
                            />
                        </Box>

                </div>
                <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Цвет</div>


                    <div className="selector-box-one boxes">
                        <div className="selector-header dfghjdfg">
                            <span className="select-current" id="">Light green</span>
                            <div className="edfhhhg"></div>
                        </div>
                        <div className="select-body">
                            <div className="select-item sdfghlkjh">
                                <div className="sdfg">Light green</div>
                                <div className="edfhhhg "></div>
                            </div>

                            <div className="select-item sdfghlkjh">
                                <div className="sdfg">Light green</div>
                                <div className="edfhhhg"></div>
                            </div>

                            <div className="select-item sdfghlkjh">
                                <div className="sdfg">Light green</div>
                                <div className="edfhhhg"></div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Размер</div>


                    <div className="selector-box-one boxes">
                        <div className="selector-header ">
                            <span className="select-current" id="">45EU</span>
                        </div>
                        <div className="select-body">
                            <div className="select-item">45EU</div>

                            <div className="select-item">44EU</div>

                            <div className="select-item">45EU</div>

                            <div className="select-item">44EU</div>

                            <div className="select-item">45EU</div>

                            <div className="select-item">44EU</div>
                        </div>
                    </div>


                </div>
                <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Сезон</div>
                    <div className="selector-box-one ">
                        <div className="selector-header ">
                            <span className="select-current" id="">Лето - осень</span>
                        </div>
                        <div className="select-body">
                            <div className="select-item">Лето - осень</div>

                            <div className="select-item">Весна - лето</div>

                            <div className="select-item">Осень - зима</div>

                            <div className="select-item">Зима - весна</div>

                        </div>
                    </div>
                </div>
            </div>


            {loading ? (
                <Loader/>
            ) : error ? (
                <Message variant={'danger'}>{error}</Message>
            ) : (
                <div className="block_five_title top">
                    <div className="block_five_title top">
                        {products.map(item => {
                            if(item.price >= value1[0] && item.price <= value1[1]){
                                return (
                                    <Product product={item}/>
                                )
                            }

                        })}

                    </div>

                </div>
            )}


        </div>
    );
};

export default CatalogScreen;