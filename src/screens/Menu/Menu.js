import React, { Component } from 'react';
import MenuItem from './MenuItem'
import AddMenuItem from './AddMenuItem';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isOpen: false
        }
    }

    componentDidMount() {
        fetch("http://54.166.71.233/active_orders")
            .then(res => res.json())
            .then(response => {
                console.log(response)
                this.setState({
                    items: response
                })
            })
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { items, isOpen } = this.state;
        return (
            <div>
                <button class="btn btn-primary" onClick={this.toggleModal}>Add new menu item</button>
                <AddMenuItem isOpen={isOpen} toggleModal={this.toggleModal}/>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Ingredients</th>
                            {/* <th scope="col">Mark Complete</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {items.map(item => (
                            <MenuItem item={item} markComplete={this.markComplete} />
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Menu;