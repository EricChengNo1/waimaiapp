import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from "../../../../components/common/Header";
import StoreListItem from "../../../../components/User/StoreListItem";
import {storeList} from "../../../../reducers/orderList";
import * as storeAction from "../../../../actions/storeList";

class StoreList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            storeList : []
        }
    }
    
    componentDidMount() {
        let storeList = this.props.storeList;
        this.setState({
            storeList: storeList
        })
    }
    
    render() {
        return (<div>
            <Header title="收藏列表" />
            {
                this.state.storeList.length > 0
                    ? this.state.storeList.map((item, index) =>{
                        return <StoreListItem key={index} data={item} />
                    })
                    : <div> - 暂无收藏 - </div>
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        storeList: state.storeList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addStoreAction: bindActionCreators(storeAction.addStore, dispatch),
        removeStoreAction: bindActionCreators(storeAction.removeStore, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreList);