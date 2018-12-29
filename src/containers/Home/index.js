import React,{Component} from 'react';
import {connect} from "react-redux";
import HomeHeader from "../../components/Home/HomeHeader";
import Carousel from "../../components/Home/Carousel";
import ListComponent from "./subpage/list";
import ResultList from '../common/ResultList';
// import Gap from "../../components/common/Gap";


class Home extends Component{
    clickUserInfoFn(){
        const userid = this.props.userInfo.userid;
        if(userid){
            //跳转到用户详情也
            this.props.history.push('/user/'+ userid);
        }else{
            //跳转到用户登录页面
            this.props.history.push('/login');
        }
    }
    
    render(){
        return (<div>
            <HomeHeader cityInfo={this.props.cityInfo} clickUserInfoFn={this.clickUserInfoFn.bind(this)} />
            <Carousel />
            {/*<Gap height="5px" background="#eeeeee" />*/}
            <ListComponent userinfo={this.props.userinfo} />
            {/*<Gap height="10px" background="#eeeeee" />*/}
            <ResultList cityInfo={this.props.cityInfo} />
        </div>)
    }
}

const mapStateToProps = state =>{
    return {
        cityInfo: state.cityInfo,
        userInfo: state.userInfo
    }
};

export default connect(
    mapStateToProps,
    null
)(Home);