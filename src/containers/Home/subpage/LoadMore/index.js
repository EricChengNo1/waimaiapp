import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './index.css';

class LoadMore extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandler(){
        this.props.loadMoreDataFn();
    }

    componentDidMount() {
        let timer;
        let top = this.refs.ref1.getBoundingClientRect().top;
        let screenHeight = window.screen.height;
        let loadMoreFn = this.props.loadMoreDataFn;
        window.addEventListener("scroll", function(){
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(callback, 50);
        }.bind(this), false);
    
        function callback(){
            if(top && top < screenHeight){
                loadMoreFn();
            }
        }

    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handlerScroll.bind(this));
    // }

    handlerScroll(){

    }

    render() {
        return (<div ref="ref1" className="load-more" onClick={this.clickHandler.bind(this)}>
            <span >加载更多</span>
        </div>)
    }
}

export default LoadMore;