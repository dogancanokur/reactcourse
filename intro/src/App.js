import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";

function App() {

    let productInfo = {
        title: "Product List"
    }
    let categoryInfo = {
        title: "Category List",
        anotherThing:"Another"
    }

    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Navi/>
                </Row>
                <Row>
                    <Col xs={3}>
                        <CategoryList info={categoryInfo}/>
                    </Col>
                    <Col xs={9}>
                        <ProductList info={productInfo}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
