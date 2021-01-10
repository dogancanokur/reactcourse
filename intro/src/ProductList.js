import React, {Component} from 'react';

class ProductList extends Component {
    // eski versiyonda yapmak gerekiyor.
    // constructor(props) {
    //     super(props);
    //     this.state={
    //     }
    // }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
            </div>
        );
    }
}

export default ProductList;