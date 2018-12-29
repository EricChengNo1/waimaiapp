import React, {Component} from 'react';
import {connect} from "react-redux";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from "../../components/common/Header";
import CurrentCity from "../../components/City/CurrentCity";
// import HotCity from "../../components/City/HotCity";
import HotCityList from "./subpage/HotCityList/HotCityList";

class City extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        return (<div>
            <Header title="选择城市"/>
            <CurrentCity cityInfo={this.props.cityInfo}/>
            <HotCityList />
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        cityInfo: state.cityInfo
    }
};


export default connect(
    mapStateToProps,
    null
)(City);