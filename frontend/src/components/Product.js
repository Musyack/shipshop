import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import newPng from '../assets/vectors/new.png'
import Star from '../assets/vectors/STAR.svg'

const Product = ({ product }) => {
  return (
    // <Card className='my-3 p-3 rounded'>
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant='top' />
    //   </Link>
    //
    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>
    //
    //     <Card.Text as='div'>
    //       <Rating
    //         value={product.rating}
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>
    //
    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
      <div className="box_card">


          <div className="card_title">
              <div className="card_title_header">

                  <div className="card_title_header_box">
                      <div className="card_title_header_off">{product.name}</div>
                      <div className="card_title_header_dsc">Light green</div>
                  </div>
                  <div className="card_title_header_box_new">
                      <img src={newPng} draggable="false"/>
                  </div>

              </div>
              <div className="card_title_main">
                  <img className="card_title_main_foto" src={product.image} draggable="false"/>
              </div>
              <div className="card_title_main_footer">
                  <div className="card_title_main_footer_price">{product.price} $</div>
                  <div className="card_title_main_footer_req">
                      <div className="info_box_name_rewiews">
                          <div className="info_box_name_rewiews_star">

                              <img src={Star} draggable="false"/>
                              <img src={Star} draggable="false"/>
                              <img src={Star} draggable="false"/>
                              <img src={Star} draggable="false"/>
                              <img src={Star} draggable="false"/>
                          </div>
                          {/*<div className="info_box_name_rewiews_text">(39)</div>*/}
                      </div>
                  </div>
              </div>
          </div>
          <Link to={`/product/${product._id}`}>
          <button type="submit" className="card_button">Добавить в корзину</button>
          </Link>
      </div>
  )
}

export default Product
