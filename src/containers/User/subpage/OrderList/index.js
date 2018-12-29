import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from "react-redux";
import OrderListItem from "../../../../components/User/OrderListItem";
import * as OrderData from "../../../../fetch/OrderList";
import Header from "../../../../components/common/Header";

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            orderList: []
        }
    }
    
    componentDidMount() {
        //根据redux中的userid，获取订单信息
        const userid = this.props.userInfo.userid;
        this.getOrderList(userid);
    }
    
    getOrderList(userid){
        const data = OrderData.OrderList.data;
        this.setState({
            orderList: data
        })
    }
    
    render() {
        return (<div>
            <Header title="订单列表" />
            {
                this.state.orderList.length > 0
                ? this.state.orderList.map((item, index) =>{
                       return <OrderListItem key={index} data={item} />
                })
                    : <div>- 暂无订单 -</div>
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(OrderList);