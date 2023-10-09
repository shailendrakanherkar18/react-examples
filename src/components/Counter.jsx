import { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Button from "./Button";

const Counter = () => {
	const params = useParams();

	const [queryParams, setQueryParams] = useSearchParams();


	console.log('queryParams :>> ', queryParams);
	console.log('queryParams :>> ', queryParams.get("fname"));
	console.log('queryParams :>> ', queryParams.get("lname"));

	const [counter1, setCounter1] = useState(Number(params.counterID));

	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		// use params.counterID
		// call api using  fetch method
		// fetch("https://get-url").then(resp => resp.json()).then(data=> {
		// 	console.log('data : ', data)
		// })
		setQueryParams("college=AGC")
	}, [setQueryParams]);

	// const onCounter1ClickHandler = () => {
	// 	setCounter1(counter1 + 1);
	// };

	const onCounter1ClickHandler = useCallback(() => {
		setCounter1(counter1 + 1);
	}, [counter1]);

	const onCounter2ClickHandler = useCallback(() => {
		setCounter2(counter2 + 1);
	}, [counter2]);

	return (
		<>
			<h1>Counter1 : {counter1}</h1>
			<Button onClickHandler={onCounter1ClickHandler} label="Counter1" />
			<br />
			<h1>Counter2 : {counter2}</h1>
			<Button onClickHandler={onCounter2ClickHandler} label="Counter2" />
			<br />
		</>
	);
};

export default Counter;
