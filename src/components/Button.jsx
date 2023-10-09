import { memo } from "react";

const Button = (props) => {
	const { label, onClickHandler } = props;
	console.log(`Inside ${label} Button Component`);

	return <button onClick={onClickHandler}>{label}</button>;
};

// When props are change then only re-renders the component
export default memo(Button);
