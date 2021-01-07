import React from 'react';
import { connect } from 'react-redux';
import './_search.scss';


class Search extends React.Component {


    render() {
        return (
            <div className="quickSearch-wrap">
                <div>
                    <input className="uk-input uk-form-width-small uk-margin-small-right"
                        type="text"
                        placeholder="Поиск"
                        onChange={(e) => {

                            console.log(e.target.value)
                        }}
                    />

                    <button className="uk-button uk-button-default">Найти</button>
                </div>

                <div className="dropdown-menu search-menu search focus show">

                    <div className="nano search-results has-scrollbar">
                        <div className="search-results-content">
                            <div className="cards">
                                <div className="cards-list videos-list">
                                    <div className="card uk-grid-small" uk-grid="true">

                                        <div className="thumbnail">
                                            <div className="thumb">
                                                <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                    <img src="https://s7.vcdn.biz/static/f/661570171/image.jpg/pt/r193x272x4" alt="Варвара-краса, длинная коса" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-content video-content">
                                            <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                <h3 className="video-title">
                                                    Варвара-краса, длинная коса
                                                    </h3>
                                            </a>
                                            <div className="video-info">
                                                <span className="video-year">1969</span>,
                                                    <span className="video-country">Семейные</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card uk-grid-small" uk-grid="true">

                                        <div className="thumbnail">
                                            <div className="thumb">
                                                <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                    <img src="https://s7.vcdn.biz/static/f/661570171/image.jpg/pt/r193x272x4" alt="Варвара-краса, длинная коса" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-content video-content">
                                            <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                <h3 className="video-title">
                                                    Варвара-краса, длинная коса
                                                    </h3>
                                            </a>
                                            <div className="video-info">
                                                <span className="video-year">1969</span>,
                                                    <span className="video-country">Семейные</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card uk-grid-small" uk-grid="true">

                                        <div className="thumbnail">
                                            <div className="thumb">
                                                <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                    <img src="https://s7.vcdn.biz/static/f/661570171/image.jpg/pt/r193x272x4" alt="Варвара-краса, длинная коса" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-content video-content">
                                            <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                <h3 className="video-title">
                                                    Варвара-краса, длинная коса
                                                    </h3>
                                            </a>
                                            <div className="video-info">
                                                <span className="video-year">1969</span>,
                                                    <span className="video-country">Семейные</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card uk-grid-small" uk-grid="true">

                                        <div className="thumbnail">
                                            <div className="thumb">
                                                <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                    <img src="https://s7.vcdn.biz/static/f/661570171/image.jpg/pt/r193x272x4" alt="Варвара-краса, длинная коса" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-content video-content">
                                            <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                <h3 className="video-title">
                                                    Варвара-краса, длинная коса
                                                    </h3>
                                            </a>
                                            <div className="video-info">
                                                <span className="video-year">1969</span>,
                                                    <span className="video-country">Семейные</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="card uk-grid-small" uk-grid="true">

                                        <div className="thumbnail">
                                            <div className="thumb">
                                                <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                    <img src="https://s7.vcdn.biz/static/f/661570171/image.jpg/pt/r193x272x4" alt="Варвара-краса, длинная коса" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="card-content video-content">
                                            <a href="https://megogo.ru/ru/view/4302-varvara-krasa-dlinnaya-kosa.html">
                                                <h3 className="video-title">
                                                    Варвара-краса, длинная коса
                                                </h3>
                                            </a>
                                            <div className="video-info">
                                                <span className="video-year">1969</span>,
                                                <span className="video-country">Семейные</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="nano-pane" style={{ opacity: 1, visibility: 'visible' }}>
                            <div className="nano-slider" style={{ height: 51, transform: 'translate(0px, 0px)' }} />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (props) => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        // setAsyncAllFilmsFromGenreAction: (param) => {
        //     dispatch(getAsyncAllFilmsFromGenreAction(param));
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);