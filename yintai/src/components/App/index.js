import React,{Component} from "react";

class App extends Component {
	constructor(prop) {
		super(prop)
	}

	render() {
		return <div>
			app
			{this.props.children}
		</div>
	}
}

export default App;