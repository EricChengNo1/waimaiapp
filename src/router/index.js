import React,{Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "../containers/Home";
import City from '../containers/City';
import Search from "../containers/Search";
import User from "../containers/User";
import Login from "../containers/Login";
import OrderList from "../containers/User/subpage/OrderList";
import StoreList from "../containers/User/subpage/StoreList";
import Detail from "../containers/Detail";

import NotFound from "../containers/404";

class MapRouter extends Component{
    render(){
        return (<HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/city" component={City}/>
                <Route path="/user/:userId" component={User}/>
                <Route path="/detail/:storeId" component={Detail} />
                <Route path="/search/:category" component={Search}/>
                <Route path="/orderlist" component={OrderList}/>
                <Route path="/storelist" component={StoreList} />
                <Redirect from="/user" to="/login"/>
                <Redirect from="/detail" to="/search/all"/>
                <Redirect from="/search" to="/search/all"/>
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>)
    }
}

export default MapRouter;