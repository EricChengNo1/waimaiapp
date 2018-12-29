import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class HotCity extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandler(){
        this.props.updateCity(this.props.cityName);
        window.history.back();
    }

    render() {
        return (
            <li onClick={this.clickHandler.bind(this)}>{this.props.cityName}</li>
        )
    }
}

export default HotCity;