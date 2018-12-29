import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class StoreAndBuy extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStored: false
        }
    }
    
    storeHandler(){
        this.setState({
            isStored: !this.state.isStored
        })
    }
    
    render() {
        return (<div className="store-and-buy-style">
            <a onClick={this.storeHandler.bind(this)}>
                {
                    this.state.isStored
                        ?  <div><i className="icon-heart1"></i>已收藏</div>
                        : <div><i className="icon-heart-o"></i>收藏</div>
                }
            </a>
            <a><i className="icon-cart"></i>购买</a>
        </div>)
    }
}

export default StoreAndBuy;