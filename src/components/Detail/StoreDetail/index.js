import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class StoreDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="store-detail">
                <div className="store-detail-style">
                    <div className="store-detail-img-div">
                        <img className="store-detail-img" src="https://p1.meituan.net/deal/329aca046b41860eadf7afa3aadf6cd4506708.jpg%40246w_184h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" alt="图片加载失败"></img>
                    </div>

                    <div>
                        <div className="store-info">
                            <span className="store-info-title">好鸡献给你</span>
                            <div className="store-info-desc">
                                <div>
                                    <i className="icon-star-full icon-star-style"></i>
                                    <i className="icon-star-full icon-star-style"></i>
                                    <i className="icon-star-full icon-star-style"></i>
                                    <i className="icon-star-full icon-star-style"></i>
                                    <i className="icon-star-half icon-star-style"></i>
                                </div>

                                <div><i className="icon-rmb"></i>18</div>
                            </div>
                            <div className="store-info-desc">
                                <span>重庆 & 四川 麻辣火锅</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height: '1px', backgroundColor:'#e5e5e5'}}></div>
                <div className="sales-info">
                    <div>营业时间: 09:00 ~ 21:00</div>
                    <div>电话订购: 11:00 ~ 20:00</div>
                    <div>网络订购: 08:30 ~ 19:00</div>
                </div>
            </div>
        )
    }
}

export default StoreDetailComponent;