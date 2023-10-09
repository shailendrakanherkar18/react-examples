import { useEffect, useState } from "react";

const HookOverview = () => {
	const [counter, setCounter] = useState(0);

	// componentDidMount
	useEffect(() => {
		console.log("ComponentDidMount ");
	}, []);

	// componentDidUpdate
	useEffect(() => {
		console.log("componentDidUpdate : ", counter);
	}, [counter]);


	
	// componentWillUnmount
	useEffect(() => {
		return () => {
			console.log("componentWillUnmount");
		};
	}, []);

	// cleanup function
	useEffect(() => {
		const intervalID = setInterval(()=>{
			console.log("componentDidUpdate : ", counter);
		}, 2000)
		return () => {
			console.log("componentWillUnmount");
			clearInterval(intervalID)
		};
	}, [counter]);

	const incrementClickHandler = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>HookOverview</h1>
			Counter : {counter}
			<br />
			<button onClick={incrementClickHandler}>Increment</button>
		</div>
	);
};

export default HookOverview;
