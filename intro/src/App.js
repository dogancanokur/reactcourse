import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Col, Container, Row} from "reactstrap";

function App() {
    return (
        <div>
            <h2>App</h2>
            <Container>
                <Row>
                    <Navi/>
                </Row>
                <Row>
                    <Col xs={3}>
                        <ProductList/>
                    </Col>
                    <Col xs={9}>
                        <CategoryList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
