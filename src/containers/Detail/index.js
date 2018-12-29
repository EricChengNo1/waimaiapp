import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from "react-redux";
import Header from "../../components/common/Header";
import StoreDetail from "./subpage/StoreDetail";
import UserComments from "./subpage/UserComments";
import StoreAndBuy from "./subpage/StoreAndBuy";



class Detail extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            storeId: '',
            isStoreExist: false
        }
    }

    componentDidMount() {
        const storeId = this.props.match.params.storeId;

        //根据传过来的storeId,检查此商户id是否存在
        const isExist = this.checkStoreIsExist(storeId);
        if(!isExist){
            this.setState({
                isStoreExist: false
            });
            return;
        }

        this.setState({
            storeId: storeId,
            isStoreExist: true
        });
    }

    checkStoreIsExist(storeId){
        return true;
    }

    render() {
        return (<div>
            <Header title="商户详情"/>
            {
                this.state.isStoreExist
                    ? <div>
                        <StoreDetail />
                        <StoreAndBuy />
                        <UserComments storeId={this.state.storeId}/>
                        </div>
                    : <div>不存在此商户!</div>
            }

        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};

export default connect(
    mapStateToProps,
    null
)(Detail);