import React, {Component} from 'react';

class CategoryList extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <p>{this.props.info.anotherThing}</p>
                {/*<ListGroup>*/}
                {/*    <ListGroupItem>Cras justo odio</ListGroupItem>*/}
                {/*    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>*/}
                {/*    <ListGroupItem>Morbi leo risus</ListGroupItem>*/}
                {/*    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>*/}
                {/*    <ListGroupItem>Vestibulum at eros</ListGroupItem>*/}
                {/*</ListGroup>*/}
            </div>
        );
    }
}

export default CategoryList;