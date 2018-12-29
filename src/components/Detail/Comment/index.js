import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './index.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        const {userid, phone, comment_start, comment} = this.props.item;
        return (<div className="comment">
            <div>
                <i className="icon-user-o"></i>&nbsp;&nbsp;&nbsp;
                <span>{phone}</span>
            </div>

            <div>
                <i className="icon-star-full"></i>
                <i className="icon-star-full"></i>
                <i className="icon-star-full"></i>
                <i className="icon-star-full"></i>
                <i className="icon-star-empty"></i>
            </div>

            <div>
                <span>
                    {comment}
                </span>
            </div>
        </div>)
    }
}

export default Comment;