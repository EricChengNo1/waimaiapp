import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import ReactSwipe from "react-swipe";
import {Link} from "react-router-dom";

import './index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        };
    }

    componentWillUpdate() {
        console.log(this.state.index);
    }

    render() {
        const opts = {
            auto: 3000,
            callback: index => {
                // this.setState({
                //     index: index
                // })
            }
        };
        return (<div className="gap">
            <ReactSwipe swipeOptions={opts}>
                <div>
                    <div className="carousel-item">
                        <div className="carousel-item-sub-part">
                            <Link to='/search/美食'>
                                <div className="carousel-item-part">
                                    <i className="icon-mobile"></i>
                                    <p>美食</p>
                                </div>
                            </Link>
                        </div>
                        <div className="carousel-item-sub-part">
                            <Link to="/search/电影">
                                <div className="carousel-item-part">
                                    <i className="icon-file-video"></i>
                                    <p>电影</p>
                                </div>
                            </Link>
                        </div>
                        <div className="carousel-item-sub-part">
                            <Link to="/search/KTV">
                            <div className="carousel-item-part">
                                <i className="icon-file-music"></i>
                                <p>KTV</p>
                            </div></Link>
                        </div>
                        <div className="carousel-item-sub-part">
                            <Link to="/search/酒店">
                                <div className="carousel-item-part">
                                    <i className="icon-home2"></i>
                                    <p>酒店</p>
                                </div>
                            </Link>

                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-rmb"></i>
                                <p>休闲</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-cab"></i>
                                <p>外卖</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-camera"></i>
                                <p>亲子</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-cab"></i>
                                <p>美发</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-camera"></i>
                                <p>门票</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-cab"></i>
                                <p>健身</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-item">
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-cart"></i>
                                <p>购物</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-vcard-o"></i>
                                <p>结婚</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-file-video"></i>
                                <p>摄影</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-music"></i>
                                <p>KTV</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-cab"></i>
                                <p>动物园</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-vcard-o"></i>
                                <p>商场</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-home2"></i>
                                <p>家居</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-home2"></i>
                                <p>装修</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-home2"></i>
                                <p>按摩</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-home2"></i>
                                <p>足疗</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-item">
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-venus"></i>
                                <p>洗浴</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-cab"></i>
                                <p>酒吧</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-taxi"></i>
                                <p>美甲</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-wechat"></i>
                                <p>SPA</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-qq"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-mobile"></i>
                                <p>服饰</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-star-empty"></i>
                                <p>周边游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-item">
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                        <div className="carousel-item-sub-part">
                            <div className="carousel-item-part">
                                <i className="icon-heart1"></i>
                                <p>旅游</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactSwipe>
            <div className="swiper-pagination">
                <ul className="swiper-pagination-items">
                    <li className={this.state.index === 0 ? 'selected' : ''}></li>
                    <li className={this.state.index === 1 ? 'selected' : ''}></li>
                    <li className={this.state.index === 2 ? 'selected' : ''}></li>
                    <li className={this.state.index === 3 ? 'selected' : ''}></li>
                </ul>
            </div>
        </div>)
    }
}

export default Index;