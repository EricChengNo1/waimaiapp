import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchInput from "../../common/SearchInput";
import './index.css';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandler(){
        window.history.back();
    }

    keyUpHandler(text){
        // this.props.history.push({
        //     pathname: '/search/all',
        //     state: {
        //         inputValue: text
        //     }
        // });
        console.log(text)
    }

    render() {
        return (<div className="search-header">
            <div className="search-header-icon">
                <i onClick={this.clickHandler.bind(this)} className="icon-chevron-left"></i>
            </div>
            <SearchInput  keyUpHandler={this.keyUpHandler.bind(this)} />
        </div>)
    }
}

export default SearchHeader;