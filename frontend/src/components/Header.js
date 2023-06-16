import React, {useEffect, useState} from 'react'
import {Link, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown, Form} from 'react-bootstrap'
import SearchBox from './SearchBox'
import geo from  '../assets/vectors/geo.svg'
import {login, logout, register} from '../actions/userActions'
import logo from '../assets/vectors/logo.svg'
import cart from '../assets/vectors/cart.svg'
import logo2 from  '../assets/vectors/logo2.svg'
import search from '../assets/vectors/search.svg'
import { useHistory } from "react-router-dom";
import {Box, Modal, Typography} from "@mui/material";
import close from '../assets/vectors/close.svg'
import LogoutIcon from '../assets/vectors/logout.png'
const Header = ({location}) => {
  const history = useHistory()

  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email2, setEmail2] = useState('')
  const [password2, setPassword2] = useState('')



  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const userRegister = useSelector((state) => state.userRegister)




  useEffect(() => {
    if (userInfo) {
      setOpen('1')


    }
  }, [history, userInfo])

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(login(email2, password2))
  }

  const registerHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, phone, password))
    }
  }


  const [open, setOpen] = useState('');
  const handleOpenSignIn = () => setOpen('signin');
  const handleOpenSignUp = () => setOpen('signup');

  const handleClose = () => setOpen('');


  const logoutHandler = () => {
    dispatch(logout())
  }
  const [searching, setSearching] = useState(false)
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }




  return (
    <>
      <Modal
          open={open == 'signup' ? true : false}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
        <div className="targer_window_sign_up" style={{display: 'block'}}>
          <div className="window_sign_up">
            <div className="window_sign_up_header">
              <div className="window_sign_up_header_link">
                <div className="window_sign_up_header_link active">Регистрация</div>
                <div className="window_sign_up_header_link active">/</div>
                <div onClick={handleOpenSignIn} className="window_sign_up_header_link">вход</div>
              </div>
              <div className="window_sign_up_header_close">
                <img src={close} onClick={handleClose} draggable="false"/>
              </div>
            </div>

            <div className="window_sign_up_main">
              <input type="text" className="window_sign_up_main_input" name={'name'} value={name} onChange={e => setName(e.target.value)} placeholder=" Введите своё имя"/>
                <input type="text" className="window_sign_up_main_input" name={'email'} value={email} onChange={e => setEmail(e.target.value)} placeholder=" Введите свой email"/>
                  <input type="text" className="window_sign_up_main_input" name={'phone'} value={phone} onChange={e => setPhone(e.target.value)} placeholder=" Ваш телефон"/>
                    <input type="text" className="window_sign_up_main_input" type={'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder=" Придумайте пароль"/>
                      <input type="text" className="window_sign_up_main_input" type={'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder=" Повторите пароль"/>
            </div>

            <div className="window_sign_up_footer">
              <div className="window_sign_up_footer_btn">
                <button type="submit" className="window_sign_up_footer_button" onClick={registerHandler}>Зарегистрироваться</button>
              </div>
              <div className="window_sign_up_footer_dsc">
                Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с <u><span
                  className="fdghj">офертой</span></u> и <u><span className="fdghj">политикой конфиденциальности</span></u> и
                становитесь участником программы лояльности
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
          open={open == 'signin' ? true : false}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <div className="targer_window_sign_in " style={{display: 'block'}}>
          <div className="window_sign_up">
            <div className="window_sign_up_header">
              <div className="window_sign_up_header_link">
                <div  className="window_sign_up_header_link active">Вход</div>
                <div className="window_sign_up_header_link active">/</div>
                <div onClick={handleOpenSignUp} className="window_sign_up_header_link">регистрация</div>
              </div>
              <div className="window_sign_up_header_close">
                <img src={close} onClick={handleClose} draggable="false"/>
              </div>
            </div>

            <div className="window_sign_up_main">
              <input type="text" className="window_sign_up_main_input" name={'email'} value={email2} onChange={e => setEmail2(e.target.value)} placeholder=" Введите email"/>
              <input type="text" className="window_sign_up_main_input" value={password2} onChange={e => setPassword2(e.target.value)} placeholder=" Введите пароль"/>

            </div>

            <div className="window_sign_up_footer">
              <div className="window_sign_up_footer_btn">
                <button type="submit" className="window_sign_up_footer_button sign_in" onClick={loginHandler}>Войти</button>
              </div>
              <div className="window_sign_up_footer_dsc">
                Нажимая кнопку «Войти», вы даете согласие на обработку персональных данных
              </div>
              <div className="pass">Забыли пароль?</div>
            </div>
          </div>
        </div>
      </Modal>
      {userInfo && userInfo.isAdmin ? (
          <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Route render={({ history }) => <SearchBox history={history} />} />
                  <Nav className='ml-auto'>
                    <LinkContainer to='/cart'>
                      <Nav.Link>
                        <i className='fas fa-shopping-cart'></i> Cart
                      </Nav.Link>
                    </LinkContainer>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                          <LinkContainer to='/profile'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <LinkContainer to='/login'>
                          <Nav.Link>
                            <i className='fas fa-user'></i> Sign In
                          </Nav.Link>
                        </LinkContainer>
                    )}
                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenu'>
                          <LinkContainer to='/admin/userlist'>
                            <NavDropdown.Item>Users</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/productlist'>
                            <NavDropdown.Item>Products</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/orderlist'>
                            <NavDropdown.Item>Orders</NavDropdown.Item>
                          </LinkContainer>
                        </NavDropdown>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
      ) : ''}
      <header className="header">
        <div className="language-box">
          <div className="nav_nav">
            <div className="language">
              <div className="gh link-navv">
                <img src={geo}/>
                <div className="link-navv" id="link-navvv">Москва и область</div>
              </div>
              <div className="gg">
                <a href="index.html">
                  <div className="vid">

                    <h2 className="vv">Москва и область</h2>
                  </div>
                </a>
                <a href="./EU language/index.html">
                  <div className="asi">

                    <h2 className="aa">Санкт-Петербург</h2>
                  </div>
                </a>
              </div>
            </div>
            <div className="links-help">
              <div className="ul-links-help">
                <Link to={'/faq'}>
                  <div className="links-links link-navv">Вопросы и ответы</div>
                </Link>
                <Link to={'/refund'}>
                  <div className="links-links link-navv">Обмен и возврат</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation">
          <div className="logo_navv">
            <Link to={'/'}>
              <div className="logo">
                <img className="" src={logo} draggable="false"/>

              </div>
            </Link>
            <div className="navv">
              <div className="navv_link">Все Кроссовки</div>

            </div>
          </div>
          <div className="logo2">
            <img className="logo2" src={logo2} draggable="false"/>

          </div>
          <div className="gbhjk">
            <div className="nav_authorization">
              <div className="authorization">
                {userInfo ?

                    <>
                      <Link to={'/profile'}>
                        <div className="navv_link ertyuuu" >{userInfo.name}</div>

                      </Link>
                      <img className={'navv_link ertyuuu'} style={{cursor: 'pointer'}} onClick={logoutHandler} src={LogoutIcon} alt={'logout'} style={{width: '5%'}}/>
                    </>

                 : (
                    <>
                      <div className="navv_link ertyuuu" onClick={handleOpenSignIn}>Вход</div>
                      <div className="vgbhjk ertyuuuu"></div>
                      <div className="navv_link " onClick={handleOpenSignUp}>Регистрация</div>
                    </>
                ) }
              </div>
              <div className="nav_search">
                <label className="" htmlFor="clc">
                  <input type=""  id="clc" className="input_search" placeholder=""/>
                  <img onClick={() => setSearching(!searching)} src={search} draggable="false"/>
                </label>

                <Form onSubmit={submitHandler}>
                  <div className="sech" style={{display: searching ? 'block' : 'none'}}>
                    <div className="target_window_searcch">
                      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="search_target" placeholder="Поиск"/>

                    </div>
                  </div>
                </Form>
                <img src={cart} draggable="false"/>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
