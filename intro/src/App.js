import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";
import {Component} from "react/cjs/react.production.min";

export default class App extends Component {
    state = {
        currentCategory: "",
        products: []
    };

    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName});
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct = () => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => this.setState({products: data}))
    }

    render() {
        let productInfo = {title: "Product List"};
        let categoryInfo = {title: "Category List"};
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Navi/>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <CategoryList currentCategory={this.state.currentCategory}
                                          changeCategory={this.changeCategory} info={categoryInfo}/>
                        </Col>
                        <Col xs={9}>
                            <ProductList currentCategory={this.state.currentCategory}
                                         products={this.state.products} info={productInfo}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}