import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";
import {Component} from "react/cjs/react.production.min";
import alertify from "alertifyjs";

export default class App extends Component {
    state = {
        currentCategory: "",
        products: [],
        cart: []
    };

    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName});
        this.getProduct(category.id);
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct = (categoryId) => {
        let url = "http://localhost:3000/products";
        console.log(categoryId)
        // is defined
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data}))
    }

    addToCart = (product) => {
        let newCart = this.state.cart;
        var addedItem = newCart.find(c => c.product.id === product.id);

        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({product: product, quantity: 1});
        }
        this.setState({cart: newCart});
        alertify.success(product.productName + " added to cart!", 2);
    }

    removeFromCart = (product) => {
        let newCart = this.state.cart.filter(c => c.product.id !== product.id);
        if (newCart) {
            this.setState({cart: newCart});
        }
    }

    render() {
        let productInfo = {title: "Product List"};
        let categoryInfo = {title: "Category List"};
        return (
            <div>
                <Container>
                    <Navi cart={this.state.cart}
                          removeFromCart={this.removeFromCart}/>
                    <Row>
                        <Col xs={3}>
                            <CategoryList currentCategory={this.state.currentCategory}
                                          changeCategory={this.changeCategory} info={categoryInfo}/>
                        </Col>
                        <Col xs={9}>
                            <ProductList currentCategory={this.state.currentCategory}
                                         addToCart={this.addToCart}
                                         products={this.state.products} info={productInfo}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}