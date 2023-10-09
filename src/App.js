import { Routes, Route, NavLink } from "react-router-dom";

import Counter from "./components/Counter";
import FilterProductTable from "./components/FilterProductTable";
import RefExample from "./components/Ref";
import CatFriends from "./components/Ref/CatFriends";
import SampleLifeCycle from "./components/SampleLifeCycle";
import Todo from "./components/Todo/Todo";
import TodoUseReducer from "./components/Todo/TodoUseReducer";
import TodoUseMemoApp from "./components/TodoUseMemoApp";
import TodoReduxExample from "./components/Todo/TodoReduxExample";
// import ErrorBoundary from "./components/ErrorBoundary";

const PRODUCTS = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
	const getIsActive = (obj) => {
		if (obj.isActive) {
			return "active";
		}
		return "";
	};

	return (
		<div>
			<ul>
				<NavLink className={getIsActive} to="/filter-product-table">
					Filter Product Table
				</NavLink>{" "}
				&nbsp;
				<NavLink className={getIsActive} to="/ref-example">
					Ref Example
				</NavLink>{" "}
				&nbsp;
				<NavLink className={getIsActive} to="/counter/1">
					Counter
				</NavLink>{" "}
				&nbsp;
				<NavLink className={getIsActive} to="/todo-user-memo-app">
					Todo user memo app
				</NavLink>{" "}
				&nbsp;
				<NavLink className={getIsActive} to="/sample-life-cycle">
					Sample life Cycle
				</NavLink>{" "}
				<br />
				&nbsp;
				<NavLink className={getIsActive} to="/todo">
					Todo
				</NavLink>{" "}
				<NavLink className={getIsActive} to="/todo-redux">
					Todo Redux
				</NavLink>{" "}
				&nbsp;
				<NavLink className={getIsActive} to="/cat-friends">
					Cat Friends
				</NavLink>{" "}
				&nbsp;
			</ul>

			<Routes>
				<Route
					path="/filter-product-table"
					element={<FilterProductTable products={PRODUCTS} />}
				/>
				<Route path="/ref-example" element={<RefExample />} />
				<Route path="/counter/:counterID" element={<Counter />} />
				<Route path="/todo-user-memo-app" element={<TodoUseMemoApp />} />
				<Route path="/sample-life-cycle" element={<SampleLifeCycle />} />
				<Route path="/todo" element={<TodoUseReducer />} />
				<Route path="/todo-redux" element={<TodoReduxExample />} />
				<Route path="/cat-friends" element={<CatFriends />} />
			</Routes>

			{/* <FilterProductTable products={PRODUCTS} /> */}
			{/* <Counter /> */}
			{/* <TodoUseMemoApp /> */}
			{/* <SampleLifeCycle /> */}
			{/* <Todo /> */}
			{/* <CatFriends />  */}
		</div>
	);
}

export default App;

// NavLink with active stuff -- Done
// Ranked route matching
// nested route inside component
// button click redirect
