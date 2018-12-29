import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Comment from "../../../../components/Detail/Comment";
import {dataList} from '../../../../fetch/favoriteDataConfig'

class UserComments extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        
        this.state = {
            commentList: []
        }
    }
    
    componentDidMount() {
        this.GetCommentList(this.props.storeId);
    }
    
    GetCommentList(storeId) {
        let storeInfo = dataList.data.filter((item, index) => {
            return item.id === this.props.storeId
        });
        
        this.setState({
            commentList: storeInfo[0].comments
        });
    }
    
    render() {
        return (<div style={{backgroundColor: '#ffffff'}}>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#999'}}>用户点评</p>
            {
                this.state.commentList.length > 0
                    ? this.state.commentList.map((item, index) => {
                        return <Comment key={index}
                                        item={item}
                        />
                    })
                    : '暂无评论...'
            }
        </div>)
    }
}

export default UserComments;