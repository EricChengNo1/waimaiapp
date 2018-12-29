import React,{Component} from 'react';
import {connect} from "react-redux";
import SearchHeader from "../../components/Search/SearchHeader";
import SearchResultList from "./subpage/SearchResultList";

class Search extends Component{
    render(){
        return (<div>
            <SearchHeader />
            <SearchResultList userinfo={this.props.userinfo}/>
        </div>)
    }
}

const mapStateToProps = state =>{
    return {
        userinfo: state.userinfo
    }
};

export default connect(
    mapStateToProps,
    null
)(Search);