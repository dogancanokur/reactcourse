import React from 'react';
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({
                           categories,
                           product,
                           onSave,
                           onChange
                       }) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update" : "Add"}</h2>
            <TextInput name="productName"
                       label="Product Name"
                       value={product.productName}
                       onChange={onChange}
                       placeholder="Product Name"
                       error="Input Error"
            />

            <SelectInput name="categoryId"
                         label="Category"
                         defaultOption="Select"
                         value={product.categoryId || ""}
                         options={categories.map(category => ({
                             value: category.id,
                             text: category.categoryName
                         }))}
                         onChange={onChange}
                         error="Select Error"
            />
            <TextInput name="unitPrice"
                       label="Unit Price"
                       value={product.unitPrice}
                       onChange={onChange}
                       placeholder="Unit Price"
                       error="Input Error"
            />
            <TextInput name="quantityPerUnit"
                       label="Quantity Per Unit"
                       value={product.quantityPerUnit}
                       onChange={onChange}
                       placeholder="Quantity Per Unit"
                       error="Input Error"
            />
            <TextInput name="unitsInStock"
                       label="Units In Stock"
                       placeholder="Units In Stock"
                       value={product.unitsInStock}
                       onChange={onChange}
                       error="Input Error"
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}
export default ProductDetail;