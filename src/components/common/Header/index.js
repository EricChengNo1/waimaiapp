import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandler(){
        window.history.back();
    }

    render() {
        return (<div className="header">
            <i onClick={this.clickHandler.bind(this)} className="icon-chevron-left"></i>
            <span>{this.props.title}</span>
        </div>)
    }
}

export default Header;