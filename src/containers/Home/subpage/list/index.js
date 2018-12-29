import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import ListItem from "../../../../components/Home/ListItem";
import {dataList} from "../../../../fetch/listDataConfig";
import './index.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        //根据城市信息，获取“超值特惠”数据
        const cityName = this.props.updateCity;
        this.getListData(cityName)
    }

    getListData(cityName) {
        //条用接口获取【超值特惠】信息
        //this.setState({data: data})

        //mock数据
        this.setState({
            data: dataList
        })
    }

    render() {
        return (<div className="gap">
            <p className="list-title">超值特惠</p>
            <div className="list">
                {
                    this.state.data.length > 0
                        ? this.state.data.map((item, index) => {
                            return (<ListItem key={index} index={index}
                                              title={item.title}
                                              description={item.description}
                                              src={item.img}/>)

                        })
                        : <div>暂无数据...</div>
                }
            </div>
        </div>)
    }
}

export default List;