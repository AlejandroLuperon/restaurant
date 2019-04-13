import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddMenuItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            categories: ["Appetizer", "Dessert"],
            category: "",
            price: "",
            ingredients: "",
            calories: "",
            showCategories: false
        }
    }
    handleAddItem = () => {
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectCategory(category) {
        this.setState({
            category
        })
    }

    handleFocus = () => {
        this.setState({
            showCategories: true
        })
    }

    handleBlue = () => {
        this.setState({
            showCategories: false
        })
    }

    render() {
        const { isOpen } = this.props;
        const { name, ingredients, category, price, calories, showCategories } = this.state;
        let { categories } = this.state;
        categories = categories.filter(c => (c.toLowerCase().includes(category.toLowerCase()) && c !== category))
        console.log(categories)
        return (
            <Modal isOpen={isOpen} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control foodbar-input" placeholder="Name" value={name} name="name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Ingredients</label>
                            <input type="text" className="form-control foodbar-input" placeholder="Ingredients" name="ingredients" value={ingredients} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" className="form-control foodbar-input" placeholder="Price" name="price" value={price} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Calories</label>
                            <input type="text" className="form-control foodbar-input" placeholder="Price" name="calories" value={calories} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input type="text" className="form-control foodbar-input" placeholder="category" name="category" value={category} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                            <ul class="list-group">
                                {showCategories ?
                                    categories.map(category => (
                                        <li class="list-group-item" onClick={() => this.handleSelectCategory(category)}>{category}</li>
                                    ))
                                    : null
                                }
                            </ul>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleAddItem}>Add Item</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>

        )
    }
}

export default AddMenuItem;
