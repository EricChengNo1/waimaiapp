import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.userRef = React.createRef();
        this.phoneRef = React.createRef();
        this.state={
            isActive: false
        }
    }

    submitHandler(e){
        e.preventDefault();
    
        this.props.doLoginFn(this.userRef.current.value, this.phoneRef.current.value);
    }
    
    keyHandler(){
        if (this.userRef.current.value.trim() !== '' && this.phoneRef.current.value.trim() !== ''){
            this.setState({
                isActive: true
            })
        }else {
            this.setState({
                isActive: false
            })
        }
    }
    
    generateHandler(){
        this.phoneRef.current.value = '239785';
        this.keyHandler();
    }

    render() {
        return (
            <div className="login-container">
                <h2>手机号登录/注册</h2>
                <form  onSubmit={this.submitHandler.bind(this)} className="login">
                    <div>
                        <span className="title-span">中国+86 <i className="icon-chevron-down"></i></span>
                        <div className="login-user">
                            <i className="icon-mobile"></i>
                            <input ref={this.userRef} type="text" placeholder="输入用户名" onKeyUp={this.keyHandler.bind(this)}/>
                        </div>
                    </div>
                    
                    <div>
                        <span className="title-span">验证码登录</span>
                        <div className="login-phone">
                            <i className="icon-key2"></i>
                            <input ref={this.phoneRef} type="text" placeholder="输入验证码" onKeyUp={this.keyHandler.bind(this)}/>
                            <a onClick={this.generateHandler.bind(this)}>获取验证码</a>
                        </div>
                    </div>
                    
            
                    <button type="submit" disabled={this.state.isActive? false: true}>登录</button>
                </form>
            </div>
            )
    }
}

export default LoginComponent;