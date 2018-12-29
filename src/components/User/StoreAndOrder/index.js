import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {withRouter} from "react-router-dom";

import './index.css';

class StoreAndOrder extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    pushToStoreListPageHandler(){
        this.props.history.push('/storelist');
    }
    
    pushToOrderListPageHandler(){
        this.props.history.push('/orderlist');
    }
    
    render() {
        return (<div className="store-and-order-container">
            <div className="store-order-item" onClick={this.pushToStoreListPageHandler.bind(this)}>
                <i className="icon-star-full"></i>
                <span>我的收藏</span>
            </div>
            <div className="store-order-item" onClick={this.pushToOrderListPageHandler.bind(this)}>
                <i className="icon-list2"></i>
                <span>我的订单</span>
            </div>
        </div>)
    }
}

export default withRouter(StoreAndOrder);