import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchInput from "../../common/SearchInput";
import './index.css';
import '../../../static/css/style.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    keyUpHandler(text){
        this.props.history.push({
            pathname: '/search/all',
            state: {
                inputValue: text
            }
        });
    }

    render() {
        return (<div className="home-header">
            <div>
                <Link to="/city">
                    <i className="icon-location icon-style"></i>
                    <span  className="home-header-city">{this.props.cityInfo}</span>
                    <i className="icon-chevron-down icon-style"></i>
                </Link>
            </div>
            <SearchInput keyUpHandler={this.keyUpHandler.bind(this)} />
            <div className="home-header-user" onClick={this.props.clickUserInfoFn}>
                <i className="icon-user-o icon-style"></i>
            </div>
        </div>)
    }
}

export default withRouter(Index);