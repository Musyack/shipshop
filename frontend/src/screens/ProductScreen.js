import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import star from '../assets/vectors/STAR.svg'


const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    // <>
    //   <Link className='btn btn-light my-3' to='/'>
    //     Go Back
    //   </Link>
    //   {loading ? (
    //     <Loader />
    //   ) : error ? (
    //     <Message variant='danger'>{error}</Message>
    //   ) : (
    //     <>
    //       <Meta title={product.name} />
    //       <Row>
    //         <Col md={6}>
    //           <Image src={product.image} alt={product.name} fluid />
    //         </Col>
    //         <Col md={3}>
    //           <ListGroup variant='flush'>
    //             <ListGroup.Item>
    //               <h3>{product.name}</h3>
    //             </ListGroup.Item>
    //             <ListGroup.Item>
    //               <Rating
    //                 value={product.rating}
    //                 text={`${product.numReviews} reviews`}
    //               />
    //             </ListGroup.Item>
    //             <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
    //             <ListGroup.Item>
    //               Description: {product.description}
    //             </ListGroup.Item>
    //           </ListGroup>
    //         </Col>
    //         <Col md={3}>
    //           <Card>
    //             <ListGroup variant='flush'>
    //               <ListGroup.Item>
    //                 <Row>
    //                   <Col>Price:</Col>
    //                   <Col>
    //                     <strong>${product.price}</strong>
    //                   </Col>
    //                 </Row>
    //               </ListGroup.Item>
    //
    //               <ListGroup.Item>
    //                 <Row>
    //                   <Col>Status:</Col>
    //                   <Col>
    //                     {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
    //                   </Col>
    //                 </Row>
    //               </ListGroup.Item>
    //
    //               {product.countInStock > 0 && (
    //                 <ListGroup.Item>
    //                   <Row>
    //                     <Col>Qty</Col>
    //                     <Col>
    //                       <Form.Control
    //                         as='select'
    //                         value={qty}
    //                         onChange={(e) => setQty(e.target.value)}
    //                       >
    //                         {[...Array(product.countInStock).keys()].map(
    //                           (x) => (
    //                             <option key={x + 1} value={x + 1}>
    //                               {x + 1}
    //                             </option>
    //                           )
    //                         )}
    //                       </Form.Control>
    //                     </Col>
    //                   </Row>
    //                 </ListGroup.Item>
    //               )}
    //
    //               <ListGroup.Item>
    //                 <Button
    //                   onClick={addToCartHandler}
    //                   className='btn-block'
    //                   type='button'
    //                   disabled={product.countInStock === 0}
    //                 >
    //                   Add To Cart
    //                 </Button>
    //               </ListGroup.Item>
    //             </ListGroup>
    //           </Card>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col md={6}>
    //           <h2>Reviews</h2>
    //           {product.reviews.length === 0 && <Message>No Reviews</Message>}
    //           <ListGroup variant='flush'>
    //             {product.reviews.map((review) => (
    //               <ListGroup.Item key={review._id}>
    //                 <strong>{review.name}</strong>
    //                 <Rating value={review.rating} />
    //                 <p>{review.createdAt.substring(0, 10)}</p>
    //                 <p>{review.comment}</p>
    //               </ListGroup.Item>
    //             ))}
    //             <ListGroup.Item>
    //               <h2>Write a Customer Review</h2>
    //               {successProductReview && (
    //                 <Message variant='success'>
    //                   Review submitted successfully
    //                 </Message>
    //               )}
    //               {loadingProductReview && <Loader />}
    //               {errorProductReview && (
    //                 <Message variant='danger'>{errorProductReview}</Message>
    //               )}
    //               {userInfo ? (
    //                 <Form onSubmit={submitHandler}>
    //                   <Form.Group controlId='rating'>
    //                     <Form.Label>Rating</Form.Label>
    //                     <Form.Control
    //                       as='select'
    //                       value={rating}
    //                       onChange={(e) => setRating(e.target.value)}
    //                     >
    //                       <option value=''>Select...</option>
    //                       <option value='1'>1 - Poor</option>
    //                       <option value='2'>2 - Fair</option>
    //                       <option value='3'>3 - Good</option>
    //                       <option value='4'>4 - Very Good</option>
    //                       <option value='5'>5 - Excellent</option>
    //                     </Form.Control>
    //                   </Form.Group>
    //                   <Form.Group controlId='comment'>
    //                     <Form.Label>Comment</Form.Label>
    //                     <Form.Control
    //                       as='textarea'
    //                       row='3'
    //                       value={comment}
    //                       onChange={(e) => setComment(e.target.value)}
    //                     ></Form.Control>
    //                   </Form.Group>
    //                   <Button
    //                     disabled={loadingProductReview}
    //                     type='submit'
    //                     variant='primary'
    //                   >
    //                     Submit
    //                   </Button>
    //                 </Form>
    //               ) : (
    //                 <Message>
    //                   Please <Link to='/login'>sign in</Link> to write a review{' '}
    //                 </Message>
    //               )}
    //             </ListGroup.Item>
    //           </ListGroup>
    //         </Col>
    //       </Row>
    //     </>
    //   )}
    // </>
      <>
        <div className="block_block">
          {/*<div className="nav_block_links">*/}
          {/*  <div className="block_links">Главная</div>*/}
          {/*  <div className="block_links">/</div>*/}
          {/*  <div className="block_links">Женщинам</div>*/}
          {/*  <div className="block_links">/</div>*/}
          {/*  <div className="block_links">Новинки</div>*/}
          {/*  <div className="block_links">/</div>*/}
          {/*  <div className="block_links">Adidas</div>*/}
          {/*  <div className="block_links">/</div>*/}
          {/*  <div className="block_links">Originals Nite Jogger</div>*/}
          {/*</div>*/}
          <div className="block_product_page">
            <div className="block_product_page_foto_box">

              <div className="product_page_foto_box">
                <img className="product_page_foto_box" src={product.image} draggable="false"/>
              </div>
            </div>

            <div className="block_product_page_info_box">
              <div className="info_box_name">
                <div className="info_box_name_box">
                  <div className="info_box_name_rewiews">
                    <div className="info_box_name_rewiews_star">
                      <img src={star} draggable="false"/>
                        <img src={star} draggable="false"/>
                          <img src={star} draggable="false"/>
                            <img src={star} draggable="false"/>
                              <img src={star} draggable="false"/>
                    </div>
                    <div className="info_box_name_rewiews_text">(39)</div>
                  </div>
                  <div className="info_box_name_name">{product.name}</div>
                </div>
                <div className="info_box_name_price">{product.price} ₽</div>
              </div>


              <div className="info_box_info">
                <div className="info_box_info_selectors">
                  <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Размер</div>

                    <select className={'selector-box-one'} defaultValue={'35 EU'}>
                      <option className="select-item" value={'35 EU'}>35 EU</option>
                      <option className="select-item" value={'36 EU'}>36 EU</option>
                      <option className="select-item" value={'37 EU'}>37 EU</option>
                      <option className="select-item" value={'38 EU'}>38 EU</option>
                      <option className="select-item" value={'39 EU'}>39 EU</option>
                      <option className="select-item" value={'40 EU'}>40 EU</option>
                      <option className="select-item" value={'41 EU'}>41 EU</option>
                      <option className="select-item" value={'42 EU'}>42 EU</option>
                      <option className="select-item" value={'43 EU'}>43 EU</option>
                      <option className="select-item" value={'44 EU'}>44 EU</option>
                      <option className="select-item" value={'45 EU'}>45 EU</option>
                      <option className="select-item" value={'46 EU'}>46 EU</option>
                    </select>



                  </div>

                  <div className="info_box_info_selectors_box">
                    <div className="selectors_box_text">Цвет</div>


                    <div className="selector-box-one ">
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
                </div>

                <div className="block_basket_btn_dsc sdfg">Обращаем внимание, российский размер (RU) не указывается на
                  упаковке. Переведен автоматически по стандартам ГОСТ из сантиметров (СМ)
                </div>
              </div>


              <button type="submit" className="info_resultt_button" onClick={addToCartHandler}>Добавить в корзину</button>
              <div className="info_box_dsc">

                <div className="block_basket_btn">

                  <button type="submit" className="block_basket_button ">О товаре</button>


                </div>
                <div className="block_basket_btn_dsc">{product.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default ProductScreen
