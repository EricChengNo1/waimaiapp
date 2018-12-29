import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './index.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="list-item">
                <div className="list-item-item">
                    <p className={this.props.index % 2 === 0 ?"list-item-title-red" : "list-item-title-blue"}>{this.props.title}</p>
                    <span className="list-item-description">{this.props.description}</span>
                    <a className="list-item-img" href="/detail">
                        <img className="list-item-img-style" src={this.props.src} alt="图片加载失败.."></img>
                    </a>
                </div>
            </div>
            )
    }
}

export default ListItem;