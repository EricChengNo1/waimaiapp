import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactModal from "react-modal";
import './index.css';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#fff',
        opacity: 0.3
    }
};

class StoreListItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            isShowModal: false
        }
    }
    openModal(){
        this.setState({
            isShowModal: true
        })
    }
    
    closeModal(){
        this.setState({
            isShowModal: false
        })
    }
    
    removeStoreHandler(){
        this.closeModal();
        //将此收藏从redux中移除
        
    }
    
    
    render() {
        return (<div className="store-list-container">
            <div className="store-list">
                <img className="store-item-img" src={this.props.data.img} alt=""/>
                <div className="store-item-info">
                    <span>商户名称： {this.props.data.title}</span>
                    <span>数量： {this.props.data.salesNum}</span>
                    <span>价格: <i className="icon-rmb">{this.props.data.price}</i></span>
                </div>
                <div className="item-isStore" onClick={this.openModal.bind(this)}>
                    <i className="icon-ellipsis-v ellipses-style"></i>
                </div>
            </div>
            <ReactModal
                ariaHideApp={false}
                isOpen={this.state.isShowModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <button style={{height: '30px', width: '100px', backgroundColor:'blue', color:'white'}}
                        onClick={this.removeStoreHandler.bind(this)}
                >
                    取消收藏
                </button>
                <button style={{height: '30px', width: '100px', backgroundColor:'blue', color:'white'}}
                    onClick={this.closeModal.bind(this)}
                >
                    取消
                </button>
            </ReactModal>
        </div>)
    }
}

export default StoreListItem;