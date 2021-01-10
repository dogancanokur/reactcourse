import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";

function App() {

    let titleProduct = "Product List";
    let titleCategory = "Category List";

    return (
        <div>
            <h2>App</h2>
            <Container>
                <Row>
                    <Navi/>
                </Row>
                <Row>
                    <Col xs={3}>
                        <CategoryList title={titleCategory}/>
                    </Col>
                    <Col xs={9}>
                        <ProductList title={titleProduct}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
