import React from 'react';

const RefundScreen = () => {
    return (

        <div className="block_block">
            <div className="block_quest">
                <div className="block_quest_offer">
                    <div className="nav_block_links">
                        <div className="block_links">Главная</div>
                        <div className="block_links">/</div>
                        <div className="block_links">Обмен и возврат</div>
                    </div>
                    <div className="block_offers">
                        <div className="block_offers_of">Обмен и возврат</div>
                        <div className="block_offers_dsc">Вы можете вернуть неподошедший товар в течение 14 дней с
                            момента получения заказа. Мы принимаем к возврату только неиспользованные вещи с бирками,
                            наклейками и упаковкой. Пожалуйста, будьте аккуратны, примеряя вещь.
                        </div>
                    </div>
                </div>
                <div className="block_quest_contant">

                    <div className="block_question">
                        <div className="block_question_que">1. Возврат по желанию покупателя</div>
                        <div className="block_question_txt">Вы можете вернуть товар по собственному желанию, если вам,
                            например, не подошел размер, цвет, модель и т.п. В этом случае стоимость обратной доставки
                            оплачиваете вы.
                        </div>
                    </div>

                    <div className="block_question">
                        <div className="block_question_que">2. Возврат по вине продавца</div>
                        <div className="block_question_txt">Ошибки со стороны магазина тоже случаются. Если вы получили
                            не то, что заказывали, или вещь оказалась с дефектом, стоимость обратной доставки Почтой
                            России оплачиваем мы. Деньги вернутся к вам в течение 5-7 рабочих дней с того момента, как
                            мы получим вашу посылку с возвратом в Москве.
                        </div>
                    </div>
                    <div className="block_question">
                        <div className="block_question_que">3. Отправка товара Почтой России</div>
                        <div className="block_question_txt">Вы можете отправить товар обратно Почтой России за свой
                            счет.
                            <br/><br/>
                                Предварительно напишите нам на <span className="green">@shipshop.ru</span>. В теме
                                письма укажите номер заказа, а в самом письме — причину обмена/возврата и артикул
                                товара, который вам не подошел. Для обмена напишите артикул и размер нужной вам вещи.
                                При возврате просто напишите, что хотите вернуть деньги. В ответ мы пришлем подробные
                                инструкции, что и как вам нужно будет сделать.
                                <br/><br/>
                                    На почте обязательно составьте опись вещей, которые вы нам отправляете. Это нужно на
                                    случай решения спорных моментов, если что-то вдруг потеряется в пути.</div>
                    </div>
                    <div className="block_question">
                        <div className="block_question_que">4. Отправка товара курьером ShipShop</div>
                        <div className="block_question_txt">Если вы живете в Москве в пределах МКАД, вы можете вызвать
                            нашего курьера. Это будет стоить 500 рублей. Курьер приезжает по будням с 10:00 до 18:00.
                        </div>
                    </div>
                    <div className="block_question">
                        <div className="block_question_que">5. Вернуть товар в магазин</div>
                        <div className="block_question_txt">Если вы забирали заказ самовывозом или купили вещь в одном
                            из наших магазинов, можете просто привезти ее обратно. Обязательно позвоните в магазин и
                            предупредите, что собираетесь приехать.
                        </div>
                    </div>


                </div>
            </div>
        </div>

);
};

export default RefundScreen;