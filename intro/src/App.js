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