import React, {Component} from 'react';

class ProductList extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.props.currentCategory}</h3>
            </div>
        );
    }
}

export default ProductList;