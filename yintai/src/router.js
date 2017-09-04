import {
	HashRouter as Router,
	Route,
	Redirect,
	Link,
	Switch	
} from 'react-router-dom';

import App from "./components/App";
import Home from "./components/Home"; 
import Library from "./components/Library"; 
import My from "./components/My";  

const router = (
	<Router>
		<App>
			<Route path="/home" component = {Home}/>
			<Route path="/library" component = {Library}/>
			<Route path="/my" component = {My}/>

		</App>
	</Router>
)


export default router;