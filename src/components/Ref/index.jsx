import { useRef, useEffect } from "react";

const RefExample = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef !== null) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<input ref={inputRef} />
		</div>
	);
};

export default RefExample;
