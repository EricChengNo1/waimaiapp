import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HotCity from "../../../../components/City/HotCity";
import {HotCityListData} from "../../../../fetch/HotCity";
import './index.css';
import {updateCity} from "../../../../actions/updateCity";

class HotCityList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            cityList: []
        }
    }

    componentDidMount() {
        this.getHotCityList();
    }

    getHotCityList(){
        this.setState({
            cityList: HotCityListData
        })
    }

    render() {
        return (<div className="city-list-container">
            <p>热门城市</p>
            <ul className="city-list">
                {this.state.cityList.map((item, index) => {
                    return <HotCity key={index} cityName={item} updateCity={this.props.updateCityAction}/>
                })}
            </ul>
        </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCityAction: bindActionCreators(updateCity, dispatch)
    }
};

export default connect(
    null,
    mapDispatchToProps
)(HotCityList);