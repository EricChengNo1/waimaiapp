import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../../components/common/Header";
import LoginComponent from "../../components/Login";
import {updateUser} from "../../actions/userinfo";

class Login extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    loginHandler(userid, identifyCode) {
        // 1、保存用户信息到redux中
        this.props.updateUserAction(userid);
        // 跳转到用户中心
        this.props.history.push({
            pathname: '/user/' + userid,
            state: {
                userid: userid
            }
        });
    }
    
    render() {
        return (<div>
            <Header title="用户登录"/>
            <LoginComponent doLoginFn={this.loginHandler.bind(this)}/>
        </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserAction: bindActionCreators(updateUser, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        userinfo: state.userInfo
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);