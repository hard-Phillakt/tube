import React from 'react';

const footer = () => {

    return (
        <footer>
            <div className="uk-section uk-section-secondary uk-light">
                <div className="uk-container">
                    {/* <h3 className="tb-title__h1">KINNOT.net</h3> */}

                    <div className="uk-child-width-1-2@m uk-article-meta" uk-grid="true">
                        <div>
                            <p className="uk-flex">
                                <span className="material-icons uk-margin-small-right">theaters</span>
                                Онлайн кинотеатр
                            </p>
                            <p>Техническая поддержка: </p>
                            <p className="uk-flex">
                                <span className="material-icons uk-margin-small-right">email</span>
                                <a href="mailto:support-kinnot@gmail.com">support-kinnot@gmail.com</a></p>
                            <p>Социальные сети: </p>
                            <div className="uk-flex uk-flex-inline">
                                <div><a href="#!" className="uk-margin-right">vk</a></div>
                                <div><a href="#!">facebook</a></div>
                            </div>
                            <p>Все видео на сайте предоставлены для ознакомления <br /> и не предполагают скачивание.</p>
                        </div>
                        <div>
                            <p>Для правообладателей: </p>
                            <p>
                                Если вы обнаружили материал, представленный на нашем сайте,
                                который нарушает ваши авторские права, или же дискредитирует
                                Вашу компанию, предоставляя неверную или искаженную информацию,
                                пожалуйста свяжитесь с нами для решения этого вопроса.
                            </p>
                            <p>
                                Для этого необходимо отправить e-mail с вашего корпоративного почтового ящика содержащий:
                            </p>
                            <div>
                                <ul>
                                    <li>контактные данные, реквизиты вашей компании;</li>
                                    <li>прямую ссылку(ссылки) на материал, который вы считаете спорным;</li>
                                    <li>заверенные сканированные копии документов, подтверждающих ваше эксклюзивное право на материал;</li>
                                    <li>в случае, если вы представляете интересы другой компании – копии документов на посреднические услуги;</li>
                                </ul>
                            </div>
                            <p>На адрес <a href="mailto:abuse-kinnot@gmail.com">abuse-kinnot@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;