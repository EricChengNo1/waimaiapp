import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        return (<div className="user-info">
            <div>
                <i className="icon-user-o"></i>
                <span>{this.props.userId}</span>
            </div>
            <div>
                <i id="id" className="icon-location"></i>
                <span>{this.props.cityInfo}</span>
            </div>
        </div>)
    }
}

export default UserInfo;