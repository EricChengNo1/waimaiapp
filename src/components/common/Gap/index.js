import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Gap extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        return (
            <div style={{height: this.props.height, backgroundColor: this.props.background}}></div>
        )
    }
}

export default Gap;