import {
  HashRouter as Router, //起一个别名
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom' 

import React from "react"; 

import App from "./Components/App"; 
import Home from "./Components/Home"; 
import Library from "./Components/Library"; 
import My from "./Components/My"; 


import Detail from "./Components/Detail"; //index.js 可以省略 

import {Provider} from "react-redux";// 引入顶层组件

import store from "./Redux/Store"; //引入store对象
//用router 包裹我们跟组件
const router = (
	<Provider store = {store}>
	<Router>
 		<App>
 			<Switch>
 			{
 				//switch 组件 只匹配 第一个符合路径的组件
 			}
				<Route path="/home" component={Home}/>
				<Route path="/film" render={()=>
					<Film>
						<Switch>
							<Route path="/film/now-playing" component={Nowplaying}/>
							<Route path="/film/coming-soon" component={Comingsoon}/>
							<Redirect from ="/film" to="/film/now-playing"/>
						</Switch>
					</Film>
				}/>
				<Route path="/card" component={Card}/>
				<Route path="/detail/:kerwinID" component={Detail}/>
				<Redirect from ="/" to="/home"/>

			</Switch>
		</App>
	</Router>
	</Provider>
) 

export default router;