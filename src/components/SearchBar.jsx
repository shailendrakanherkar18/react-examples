const SearchBar = (props) => {
	const { 
        filterText,
        inStockOnly,
        onFilterTextChange,
        onInStockOnlyChange
    } = props;

	return (
		<form>
			<input
				type="text"
				value={filterText}
				placeholder="Search..."
				onChange={(e) => onFilterTextChange(e.target.value)}
			/>
			<label>
				<input
					type="checkbox"
					checked={inStockOnly}
					onChange={(e) => onInStockOnlyChange(e.target.checked)}
				/>{" "}
				Only show products in stock
			</label>
		</form>
	);
};

export default SearchBar;
