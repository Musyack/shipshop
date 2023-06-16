import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logoFooter from '../assets/image/logo-footer.png'
import emailButton from '../assets/vectors/email-button.svg'
import adidas from '../assets/image/adidas2.png'
import puma from '../assets/image/puma2.png'
import nike from '../assets/image/noke2.png'
import NB from '../assets/image/NB2.png'
import converse from '../assets/image/convers2.png'
import add from '../assets/image/add2.png'
import reebok from '../assets/image/reebook2.png'

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer_top">
              <div className="footer_logo">
                  <div className="logo_foot">
                      <img src={logoFooter} draggable="false"/>
                          <div className="dsc_footer">Все стильные кроссовки находятся в одном месте!</div>
                  </div>
              </div>

              <div className="footer_navigation">
                  <div className="footer_menu">
                      <div className="footer_menu_colomn">
                          <div className="footer_menu_colomn_name">Магазин</div>
                          <div className="footer_menu_colomn_contant">
                              <div className="footer_link">Все кроссовки</div>
                              <div className="footer_link">Популярные</div>
                              <div className="footer_link">Новинки</div>
                              <div className="footer_link">Бренды</div>
                          </div>
                      </div>
                      <div className="footer_menu_colomn">
                          <div className="footer_menu_colomn_name">Информация</div>
                          <div className="footer_menu_colomn_contant">
                              <div className="footer_link">Мои заказы</div>
                              <div className="footer_link">Вопросы и ответы</div>
                              <div className="footer_link">Обмен и возврат</div>
                              <div className="footer_link">Оплата и доставка</div>
                          </div>
                      </div>
                      <div className="footer_menu_colomn">
                          <div className="footer_menu_colomn_name">Подпишитесь на рассылку</div>
                          <div className="footer_menu_colomn_contant">
                              <div className="footer_link">Подпишитесь на нашу рассылку новостей, чтобы одними<br/> из
                                  первых узнавать о новинках в мире кроссовок!</div>
                              <div className="box_mailing">
                                  <input className="mail" type="email" placeholder="Введите ваш e-mail"/>
                                      <div className="bfkdl">
                                          <button type="submit" className="email_btn">
                                              <img src={emailButton} draggable="false"/>
                                          </button>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="footer_brands">

                      <img src={adidas} draggable="false"/>
                      <img src={puma} draggable="false"/>
                      <img src={NB} draggable="false"/>
                      <img src={converse} draggable="false"/>
                      <img src={reebok} draggable="false"/>
                      <img src={nike} draggable="false"/>
                      <img src={add} draggable="false"/>

                  </div>
              </div>
          </div>


          <div className="footer_bottom">
              <div className="line"></div>
              <div className="cookie">
                  <div className="copy">Copyright © 2023. Все права защищены</div>
                  <div className="accept">
                      <div className="accept_text">Мы используем файлы cookie для улучшения обслуживания.</div>
                      <a href="#">
                          <div className="accept_link">Принять</div>
                      </a>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer
