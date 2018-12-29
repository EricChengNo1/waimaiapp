import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class OrderListItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
            isEvaluate: false,
            toggle: false
        }
    }
    
    componentDidMount() {
        const isEvaluate = this.props.data.isEvaluate;
        if(isEvaluate){
            this.setState({
                isEvaluate: true
            })
        }
    }
    
    toggleHandler(){
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    submitCommentHandler(){
        this.setState({
            isEvaluate: true,
            toggle: !this.state.toggle
        })
    }
    
    cancelCommentHandler(){
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render() {
        return (<div className="order-list-container">
            <div className="order-list">
                <img className="order-item-img" src={this.props.data.img} alt=""/>
                <div className="order-item-info">
                    <span>商户名称： {this.props.data.title}</span>
                    <span>数量： {this.props.data.salesNum}</span>
                    <span>价格: <i className="icon-rmb">{this.props.data.price}</i></span>
                </div>
                <div className="order-item-button">
                    <button disabled={this.state.isEvaluate}
                            onClick={this.toggleHandler.bind(this)}
                            style={{backgroundColor: this.state.isEvaluate ? '#e5e5e5' : 'white'}}
                    >
                        {this.state.isEvaluate ? '已评价' : '评价'}
                    </button>
                </div>
            </div>
            <div className="order-item-evaluate" style={{display: this.state.toggle ? 'block' : 'none'}}>
                <textarea cols="30" rows="5"></textarea>
                <div>
                    <button onClick={this.cancelCommentHandler.bind(this)}>取消</button>
                    <button onClick={this.submitCommentHandler.bind(this)}>提交</button>
                </div>
            </div>
        </div>)
    }
}

export default OrderListItem;