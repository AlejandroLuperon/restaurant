import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./AddMenuItem.css"

class AddMenuItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            category: "",
            price: "",
            ingredients: "",
            calories: "",
            showCategories: false
        }
    }
    handleAddItem = () => {
        console.log(this.state)
        const { item, category, price, ingredients, calories } = this.state;
        const obj = {
            item,
            category,
            price,
            ingredients,
            calories
        }
        this.setState({
            item: "",
            category: "",
            price: "",
            ingredients: "",
            calories: "",
            showCategories: false
        })
        this.props.handleAddItem(obj)
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
        const { item, ingredients, category, price, calories, showCategories } = this.state;
        let { categories } = this.props;
        categories = categories.filter(c => (c.toLowerCase().includes(category.toLowerCase()) && c !== category))
        console.log(categories)
        return (
            <Modal isOpen={isOpen} toggle={this.toggle} className={this.props.className} size="lg">
                <ModalHeader toggle={this.toggle}>
                    Add Item
                </ModalHeader>
                <ModalBody>
                    <form className="modal-form">
                        <div className="row">
                            <div className="col-6">

                                <div className="form-group">
                                    <label className="col-form-label">Name</label>
                                    <input required type="text" className="form-control-sm form-control" placeholder="Name" value={item} name="item" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="col-form-label">Category</label>
                                    <input required type="text" className="form-control form-control-sm" placeholder="category" name="category" value={category} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                                    <ul class="list-group category-list">
                                        {showCategories ?
                                            categories.map(category => (
                                                <li class="list-group-item" onClick={() => this.handleSelectCategory(category)}>{category}</li>
                                            ))
                                            : null
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input required type="number" className="form-control form-control-sm" placeholder="Price" name="price" value={price} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-6">

                                <div className="form-group">
                                    <label>Calories</label>
                                    <input required type="number" className="form-control form-control-sm" placeholder="Price" name="calories" value={calories} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Ingredients</label>
                            <textarea required type="text" className="form-control form-control-sm" placeholder="Ingredients" name="ingredients" value={ingredients} onChange={this.handleChange} />
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggleModal} className="cancel-button">Cancel</Button>{' '}
                    <Button color="primary" onClick={this.handleAddItem} className="add-button">Add Item</Button>
                </ModalFooter>
            </Modal>

        )
    }
}

export default AddMenuItem;
