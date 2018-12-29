import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from "react-router-dom";

// import ReactModal from "react-modal";

import './index.css';

class ResultListItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showModal: false
        }
    }

    render() {
        const item = this.props.item;
        return (<div>
            <div className="favorite-list-item">
                <div className="favorite-list-item-img-div">
                    <Link to={{
                        pathname: `/detail/${item.id}`
                    }}>
                        <img className="favorite-list-item-img" src={item.img} alt="图片加载失败"></img>
                    </Link>
                </div>

                <div className="favorite-list-item-detail">
                    <Link to={{
                        pathname: `/detail/${item.id}`
                    }}>
                        <span className="favorite-list-item-detail-title">{item.title}</span></Link>
                    <div className="favorite-list-item-detail-desc">
                        <i className="icon-star-full icon-star-style">&nbsp;{item.star}</i>
                        <span>月售 {item.saleNum}</span>
                    </div>
                    <div className="favorite-list-item-detail-desc">
                        <span>起送 <i className="icon-rmb"></i>{item.startDeliver}</span>&nbsp;&nbsp;
                        <span>配送 <i className="icon-rmb"></i>{item.dispatchDeliver}</span>
                    </div>
                </div>

                <div className="interesting-and-distence">
                    <div
                        // onClick={this.handleOpenModal.bind(this)}
                        className="isInteresting">
                        <span><i className="icon-ellipsis-v"></i></span>
                    </div>

                    <span>{item.distence}</span>
                </div>
            </div>
            <div style={{height: '1px', backgroundColor: '#dfdfdf'}}></div>
        </div>)
    }
}

export default ResultListItem;