import React, {Component, createRef} from 'react';
import {withRouter} from "react-router-dom";

import PureRenderMixin from 'react-addons-pure-render-mixin';

import './index.css';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.input = createRef();
    }

    componentDidMount() {
        if(this.props.location.state){
            this.input.current.value = this.props.location.state.inputValue;
        }else{
            this.input.current.value = '';
        }
    }

    keyUpHandler(e){
        if(e.target.value.trim() !== '' && e.keyCode === 13){
            this.props.keyUpHandler(e.target.value.trim());
        }
    }

    render() {
        return (
            <div className="home-header-search-container">
                <div className="home-header-search">
                    <i className="icon-search icon-search-style icon-style"></i>
                    <input
                        className="home-header-search-input"
                        type="text"
                        placeholder="秋冬时节 劲酒相伴"
                        ref={this.input}
                        // value={this.initialValue}
                        onKeyUp={this.keyUpHandler.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(SearchInput);