import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import closeSvg from '../assets/vectors/close.svg'
import infoSvg from '../assets/vectors/info.svg'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart


  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, 1))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
      <div className="block_block">
        <div className="block_basket">
          <div className="block_basket_contant">
            <div className="block_basket_contant_offer">Корзина</div>
            <div className="block_basket_block_products">
              {cartItems.map(item => {
                return (

                    <div className="block_basket_products">
                      <div className="block_basket_products_foto">
                        <img className="basket_products_foto" src={item.image} alt={item.name} draggable="false"/>
                      </div>

                      <div className="block_basket_products_info">
                        <Link to={`/product/${item.product}`}>
                        <div className="basket_products_data">
                          <div className="basket_products_data_offer">{item.name} </div>
                          <div className="basket_products_data_info">
                            <div className="products_info">
                              {/*<div className="products_info_box">*/}
                              {/*  <div className="products_info_txt">Размер:</div>*/}
                              {/*  <div className="products_info_txt col">42 EU</div>*/}
                              {/*</div>*/}

                            </div>


                          </div>
                        </div>
                        </Link>


                        <div className="basket_products_info">
                          <div className="basket_products_price">{item.price} ₽</div>
                          <div className="basket_products_close">
                            <button onClick={() => removeFromCartHandler(item.product)} type="submit" className="button_close">
                              <img src={closeSvg} draggable="false"/>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>

                )
              })}

            </div>
          </div>
          <div className="block_basket_info">
            <div className="block_basket_btn">
              <button type="submit" className="block_basket_button active">Моя корзина</button>
              <button type="submit" className="block_basket_button">Оформление заказа</button>

            </div>

            <div className="block_basket_info_result">

              <div className="block_basket_info_result_box">
                <div className="basket_info_result_offer">В корзине</div>
                <div className="basket_info_result_box">
                  <div className="info_result">
                    <div className="info_result_block_txt">
                      <div className="info_result_txt">Товары:</div>
                      <div className="info_result_txt">{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} ₽</div>
                    </div>
                    <div className="info_result_block_txt">
                      <div className="info_result_txt">Доставка:</div>
                      <div className="info_result_txt">Бесплатно</div>
                    </div>
                    <div className="sdfgh"></div>
                    <div className="info_result_block_txt">
                      <div className="info_result_txt ertwer">Итого:</div>
                      <div className="info_result_txt ertwer">{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} ₽</div>
                    </div>
                  </div>
                  <button type="submit" onClick={checkoutHandler} className="info_resultt_button">Перейти к оформлению</button>
                </div>
              </div>

              <div className="block_basket_info_box">
                <img src={infoSvg} draggable="false"/>
                  <div className="block_basket_info_txt vghjk">Убедитесь, что ваш регион указан верно. От выбора региона
                    зависят доступные способы оплаты и получения заказа.
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // <Row>
    //   <Col md={8}>
    //     <h1>Shopping Cart</h1>
    //     {cartItems.length === 0 ? (
    //       <Message>
    //         Your cart is empty <Link to='/'>Go Back</Link>
    //       </Message>
    //     ) : (
    //       <ListGroup variant='flush'>
    //         {cartItems.map((item) => (
    //           <ListGroup.Item key={item.product}>
    //             <Row>
    //               <Col md={2}>
    //                 <Image src={item.image} alt={item.name} fluid rounded />
    //               </Col>
    //               <Col md={3}>
    //                 <Link to={`/product/${item.product}`}>{item.name}</Link>
    //               </Col>
    //               <Col md={2}>${item.price}</Col>
    //               <Col md={2}>
    //                 <Form.Control
    //                   as='select'
    //                   value={item.qty}
    //                   onChange={(e) =>
    //                     dispatch(
    //                       addToCart(item.product, Number(e.target.value))
    //                     )
    //                   }
    //                 >
    //                   {[...Array(item.countInStock).keys()].map((x) => (
    //                     <option key={x + 1} value={x + 1}>
    //                       {x + 1}
    //                     </option>
    //                   ))}
    //                 </Form.Control>
    //               </Col>
    //               <Col md={2}>
    //                 <Button
    //                   type='button'
    //                   variant='light'
    //                   onClick={() => removeFromCartHandler(item.product)}
    //                 >
    //                   <i className='fas fa-trash'></i>
    //                 </Button>
    //               </Col>
    //             </Row>
    //           </ListGroup.Item>
    //         ))}
    //       </ListGroup>
    //     )}
    //   </Col>
    //   <Col md={4}>
    //     <Card>
    //       <ListGroup variant='flush'>
    //         <ListGroup.Item>
    //           <h2>
    //             Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
    //             items
    //           </h2>
    //           $
    //           {cartItems
    //             .reduce((acc, item) => acc + item.qty * item.price, 0)
    //             .toFixed(2)}
    //         </ListGroup.Item>
    //         <ListGroup.Item>
    //           <Button
    //             type='button'
    //             className='btn-block'
    //             disabled={cartItems.length === 0}
    //             onClick={checkoutHandler}
    //           >
    //             Proceed To Checkout
    //           </Button>
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </Card>
    //   </Col>
    // </Row>
  )

}

export default CartScreen
