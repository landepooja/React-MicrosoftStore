import * as React from "react";
import history from './history';
import ItemInfo from './components/ItemInfo';
import {Route, Router , Switch } from "react-router-dom";
import App from "./App";
import HomeImages from "./components/HomeImages";

export default class MainRouter extends React.Component<any,any> {
public render() {
return (
<div>
<Router history={history}> 
<Switch>
<Route exact={true} path="/" component={App} ></Route>
 <Route exact path="/iteminfo/:id" component={ItemInfo} />
{/* <Route path="/iteminfo/:id" render = {(props) => <HomeImages {...props} {...this.props.id.item.img}/>}/> */}
</Switch>
</Router> 
</div>
);
}
}
