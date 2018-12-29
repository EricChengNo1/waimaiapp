import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './CityStyle.css';

class CurrentCity extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (<div className="current-city">
            {this.props.cityInfo}
        </div>)
    }
}

export default CurrentCity;