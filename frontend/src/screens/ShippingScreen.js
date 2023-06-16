import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import infoPng from '../assets/vectors/info.svg'
import {USER_DETAILS_RESET} from "../constants/userConstants";
import {ORDER_CREATE_RESET} from "../constants/orderConstants";
import {createOrder} from "../actions/orderActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const { cartItems } = cart
  const user = useSelector((state) => state.userLogin)
  const {userInfo} = user

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const [region, setRegion] = useState(shippingAddress.region)
  const [email, setEmail] = useState(userInfo.email)
  const [name, setName] = useState(userInfo.name)
  const [surname, setSurname] = useState(shippingAddress.surname)
  const [house, setHouse] = useState(shippingAddress.house)
  const [street, setStreet] = useState(shippingAddress.street)
  const [comment, setComment] = useState('')
  const [phone, setPhone] = useState(shippingAddress.phone)

  const dispatch = useDispatch()


  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
      cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.20 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: "Карта",
          itemsPrice: cart.itemsPrice,
          shippingPrice: 0,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        })
    )
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country, comment, phone, name, surname, house, street, email, region  }))
    setTimeout(() => {
      placeOrderHandler()
    }, 1000)

  }

  return (
    // <FormContainer>
    //   <CheckoutSteps step1 step2 />
    //   <h1>Shipping</h1>
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group controlId='address'>
    //       <Form.Label>Address</Form.Label>
    //       <Form.Control
    //         type='text'
    //         placeholder='Enter address'
    //         value={address}
    //         required
    //         onChange={(e) => setAddress(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>
    //
    //     <Form.Group controlId='city'>
    //       <Form.Label>City</Form.Label>
    //       <Form.Control
    //         type='text'
    //         placeholder='Enter city'
    //         value={city}
    //         required
    //         onChange={(e) => setCity(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>
    //
    //     <Form.Group controlId='postalCode'>
    //       <Form.Label>Postal Code</Form.Label>
    //       <Form.Control
    //         type='text'
    //         placeholder='Enter postal code'
    //         value={postalCode}
    //         required
    //         onChange={(e) => setPostalCode(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>
    //
    //     <Form.Group controlId='country'>
    //       <Form.Label>Country</Form.Label>
    //       <Form.Control
    //         type='text'
    //         placeholder='Enter country'
    //         value={country}
    //         required
    //         onChange={(e) => setCountry(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>
    //
    //     <Button type='submit' variant='primary'>
    //       Continue
    //     </Button>
    //   </Form>
    // </FormContainer>
      <div className="block_block">
        <div className="block_basket">
          <div className="block_basket_contant">
            <div className="block_basket_contant_offer">Оформление заказа</div>


            <div className="block_order">
              <div className="block_order_adress">
                <div className="block_order_adress_text">Адрес доставки</div>
                <div className="block_order_adress_box">
                  <div className="order_adress_box">
                    <div className="info_box_info_selectors_box">


                        <div className="selectors_box_text ">Введите свою область*</div>


                        <input className="selector-box-one werty" value={region} onChange={e => setRegion(e.target.value)} placeholder={'Область'} id=""/>


                      </div>

                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите свой город*</div>


                          <input className="selector-box-one werty" value={city} onChange={e => setCity(e.target.value)} placeholder={'Город'} id=""/>


                    </div>

                  </div>
                  <div className="order_adress_box">
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите свою улицу*</div>
                      <div className="selector-box-one werty">
                        <input className="order_input" value={street} onChange={e => setStreet(e.target.value)} placeholder="Улица"/>
                      </div>
                    </div>
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите свой дом*</div>
                      <div className="selector-box-one werty">
                        <input className="order_input" value={house} onChange={e => setHouse(e.target.value)} placeholder="Дом"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block_order_order">
                <div className="block_order_adress_text">Заберет заказ</div>
                <div className="block_order_adress_box">
                  <div className="order_adress_box">
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите ваше имя*</div>
                      <div className="selector-box-one werty">
                        <input className="order_input" value={name} onChange={e => setName(e.target.value)} placeholder="Имя"/>
                      </div>
                    </div>
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Выберете вашу фамилию*</div>
                      <div className="selector-box-one werty">
                        <input className="order_input" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Фамилия"/>
                      </div>
                    </div>
                  </div>
                  <div className="order_adress_box">
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите ваш номер*</div>
                      <div className="selector-box-one werty">
                        <input className="order_input" type={'number'} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7()"/>
                      </div>
                    </div>
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите ваш email*</div>
                      <div className="selector-box-one werty">
                        <input className="order_input" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Sokolov@mail.ru"/>
                      </div>
                    </div>
                  </div>
                  <div className="order_adress_box">
                    <div className="info_box_info_selectors_box ">
                      <div className="selectors_box_text ">Введите ваш комментарий к заказу*</div>
                      <div className="selector-box-one textarea">
                        <textarea className="order_input textarea" value={comment} onChange={e => setComment(e.target.value)} placeholder="Комментарий"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="block_order_info">
                <div className="block_order_info_box">

                  <div className="block_order_info_box_box">

                    <div className="block_basket_info_box">
                      <img src={infoPng} draggable="false"/>
                        <div className="block_basket_info_txt vghjk">Курьер позвонит перед доставкой. При необходимости,
                          он может оставить заказ у двери, либо передать вам лично в руки.
                        </div>
                    </div>
                  </div>
                  <button type="submit" onClick={submitHandler} className="info_resultt_button">Оформить заказ</button>
                </div>

              </div>
            </div>


          </div>


          <div className="block_basket_info">
            <div className="block_basket_btn">
              <button type="submit" className="block_basket_button ">Моя корзина</button>
              <button type="submit" className="block_basket_button active">Оформление заказа</button>
            </div>

            <div className="block_basket_info_result">

              <div className="block_basket_info_result_box">
                <div className="basket_info_result_offer">В корзине</div>
                <div className="basket_info_result_box">

                  <div className="basket_info_result_box_foto">
                    {cartItems.map(item => {
                      return (
                          <div className="result_box_foto">
                            <img className="result_box_foto" src={item.image} draggable="false"/>
                          </div>
                      )
                    })}



                  </div>


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

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
  )
}

export default ShippingScreen
