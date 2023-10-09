import React from "react";

class SampleLifeCycle extends React.Component {
	constructor(props) {
		super(props);
		console.log("constructor");

		this.state = { counter: 0 };
	}

	componentDidMount() {
		console.log("componentDidMount");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

    incrementClickHandler = () => {
        this.setState({counter: this.state.counter + 1});
    }

    // incrementClickHandler1() {
    //     this.setState({counter: this.state.counter + 1});
    // }

	render() {
		return (
			<div>
				<h1>HookOverview</h1>
				Counter : {this.state.counter}
				<br />
				<button onClick={this.incrementClickHandler}>Increment</button>
			</div>
		);
	}
}

export default SampleLifeCycle;
