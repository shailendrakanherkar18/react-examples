import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
	const { products, filterText, inStockOnly } = props;

	const getRows = () => {
		const rows = [];
		let lastCategory = null;

		products.forEach((product) => {
			// Filter searched String
			if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
				return;
			}
			// Filter Stock
			if (inStockOnly && !product.stocked) {
				return;
			}

			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category}
					/>
				);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});

		return rows;
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{getRows()}</tbody>
		</table>
	);
};

export default ProductTable;
