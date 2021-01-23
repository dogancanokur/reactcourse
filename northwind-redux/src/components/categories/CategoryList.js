import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";// dispatch
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import {Badge, ListGroup, ListGroupItem} from "reactstrap"; // getCategory almak icin


class CategoryList extends Component {
    componentDidMount() { // açılınca state e bağlanmak
        this.props.actions.getCategories()
    }

    selectCategory = (category) => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    }

    render() {
        return (
            <div>
                <h3><Badge color="warning">Category List</Badge></h3>
                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem onClick={() => this.selectCategory(category)}
                                           active={category.id === this.props.currentCategory.id}
                                           key={category.id}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>

                {/*<h5>Category size : {this.props.categories.length}</h5>*/}
                {/*<h5>Selected Category : {this.props.currentCategory.categoryName}</h5>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            // action ve dispatch i bagla
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);