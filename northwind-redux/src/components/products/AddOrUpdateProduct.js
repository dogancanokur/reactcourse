import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getCategories} from "../../redux/actions/categoryActions";
import {saveProduct} from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
                                products,
                                categories,
                                getProducts,
                                getCategories,
                                saveProduct,
                                history,
                                ...props
                            }) {
    const [product, setProduct] = useState({...props.product});
    const [errors, setErrors] = useState({});
    // set state yerine prodcut state ini setProduct ile set edebiliriz demek

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({...props.product});

    }, [props.product]); // sonsuz döngüye girmemesi için props.pruduct yerleştiği zaman dur

    function handleChange(event) {
        const {name, value} = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product)
        // .then(() => {history.push("/");
        // });
    }

    return (
        <ProductDetail product={product}
                       categories={categories}
                       onChange={handleChange}
                       onSave={handleSave}/>
    );
}

export function getProductById(products, productId) {
    // integer == string
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    // ownProps component te barındırdırları proplar
    // query string okuma işini yapacak
    const productId = ownProps.match.params.productId;
    // update
    const product = productId && state.productListReducer.length > 0 ?
        getProductById(state.productListReducer, productId)
        : {};
    return {
        // product : product
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);