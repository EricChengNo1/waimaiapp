import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Hearder from "../../components/common/Header";
import UserInfo from "../../components/User/UserInfo";
import Gap from "../../components/common/Gap";
import StoreAndOrder from "../../components/User/StoreAndOrder";
import * as StoreListData from "../../fetch/StoreListDataConfig";
import * as storeAction from "../../actions/storeList";

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            storeList: []
        }
    }
    componentDidMount() {
        //验证redux中的userid是否为空，
        //空-跳转到登录页
        const userId = this.props.userInfo.userid;
        if(!userId){
            this.props.history.push('/login');
        }
        else{
            // 1、根据userid获取用户收藏的信息
            this.getStoreList(userId);
            // 2、将收藏的信息保存到redux中
            // if(this.state.storeList.length > 0){
            //     this.state.storeList.forEach((item,index) => {
            //         this.props.storeAction.addStore(item);
            //     })
            // }
        }
    }
    
    getStoreList(userId){
        let data = StoreListData.StoreList.data;
        
        this.setState({
            storeList: data
        }, ()=>{
            if(this.state.storeList.length > 0){
                this.state.storeList.forEach((item,index) => {
                    // this.props.storeAction.addStore(item);
                    console.log(item);
                })
            }
        });
    }
    
    render(){
        return (<div>
            <Hearder title="用户中心" />
            <UserInfo userId={this.props.userInfo.userid} cityInfo={this.props.cityInfo}/>
            <Gap height="15px" background="#eee"/>
            <StoreAndOrder />
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        cityInfo: state.cityInfo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        storeAction: bindActionCreators(storeAction, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);