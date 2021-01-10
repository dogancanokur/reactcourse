import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {
                categoryId: 1,
                categoryName: "Beverages"
            },
            {
                categoryId: 2,
                categoryName: "Condiments"
            }
        ],
        currentCategory: ""
    };

    // alternatif state ve props olusturma yontemi
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         categories: [
    //             {
    //                 categoryId: 1,
    //                 categoryName: "Beverages"
    //             },
    //             {
    //                 categoryId: 2,
    //                 categoryName: "Condiments"
    //             }
    //         ]
    //         // counterVar: 1 // counterVar degisken ismidir
    //     }
    // }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <p>{this.props.info.anotherThing}</p>

                {/*<p>{this.state.counterVar}</p>*/}

                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={()=>this.setState({currentCategory: category.categoryName})}
                                           key={category.categoryId}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>
        );
    }
}

export default CategoryList;