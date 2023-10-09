import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterProductTable = (props) => {
	const { products } = props;

	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<div>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
};

export default FilterProductTable;
