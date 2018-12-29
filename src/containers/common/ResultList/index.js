import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import ResultListItem from "../../../components/common/ResultListItem";
import LoadMore from "../../Home/subpage/LoadMore";
import {dataList, dataList2} from "../../../fetch/favoriteDataConfig";
import './index.css';

class ResultList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            dataList: [],
            page: 0,
            isLoadMore: false
        }
    }

    componentDidMount() {
        const cityName = this.props.updateCity;
        this.getFavoriteDataList(cityName, this.state.page);
    }

    loadMoreDataFn() {
        let nextPage = this.state.page + 1;
        const cityName = this.props.cityInfo.cityName;
        console.log(this.state.isLoadMore);
        this.getFavoriteDataList(cityName, nextPage);
    }

    getFavoriteDataList(cityName, page) {
        let data;
        let isLoadMore = false;
        if (page === 0) {
            data = dataList.data;
            isLoadMore = true;
        } else {
            data = this.state.dataList.concat(dataList2.data);
            isLoadMore = dataList2.isLoadMore;
        }
        
        this.setState({
            dataList: data,
            page: page,
            isLoadMore: isLoadMore
        })
    }

    render() {
        return (<div className="gap">
            <p className="list-title">猜你喜欢</p>
            {
                this.state.dataList.length > 0
                    ? this.state.dataList.map((item, index) => {
                        return (<ResultListItem
                            key={index}
                            item={item}
                        />)
                    })
                    : <div>- 暂无数据 -</div>
            }
            {
                this.state.isLoadMore
                    ? <LoadMore isLoadMore={this.state.isLoadMore} loadMoreDataFn={this.loadMoreDataFn.bind(this)}/>
                    :<div className="no-more-data"><span>没有更多了</span></div>
            }
        </div>)
    }
}

export default ResultList;