import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import StoreDetailComponent from "../../../../components/Detail/StoreDetail";


class StoreDetail extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (<div>
            <StoreDetailComponent />
        </div>)
    }
}

export default StoreDetail;