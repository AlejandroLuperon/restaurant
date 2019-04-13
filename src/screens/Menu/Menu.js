import React, { Component } from 'react';
import MenuItem from './MenuItem'
import AddMenuItem from './AddMenuItem';
import "./Menu.css";
import a from '../../assets/fill-1.svg'

const data = [
    {
        item: "Pancake",
        ingredients: "pan, cake",
        price: 2,
        category: "pancakes"
    },
    {
        item: "Pancake",
        ingredients: "pan, cake",
        price: 2,
        category: "pancakes"
    },
    {
        item: "Pancake",
        ingredients: "pan, cake",
        price: 2,
        category: "pancakes"
    }

]

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isOpen: false
        }
    }

    componentDidMount() {
        fetch("http://54.166.71.233/active_orders?vendor_id=1")
            .then(res => res.json())
            .then(response => {
                console.log(response)
                console.log(data)
                var obj = {};
                data.forEach(d => {
                    if (obj[d.category]) obj[d.category].push(d)
                    else obj[d.category] = [d]
                })
                console.log(obj)
                this.setState({
                    items: obj
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
            <div class="container menu-container">
                <div class="flex-row d-flex justify-content-between menu-header align-items-end">
                    <h3>RESTAURANT MENU</h3>
                    <span onClick={this.toggleModal}>Add Menu item</span>
                </div>
                <AddMenuItem isOpen={isOpen} toggleModal={this.toggleModal} />
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col">CATEGORY</th>
                            <th scope="col">MENU ITEM & DESCRIPTION</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">ACTIONS</th>
                            {/* <th scope="col">Mark Complete</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {Object.keys(items).map(key => (
                            <React.Fragment>
                                <tr>
                                    <th rowSpan={items[key].length} style={{verticalAlign: "middle"}}>
                                        <div>
                                        {key}
                                        </div>
                                    </th>
                                    <td>
                                        <p>{items[key][0].item}</p>
                                        <p>Ingredients : {items[key][0].ingredients}</p>
                                        
                                    </td>
                                    <td>
                                        {items[key][0].price}
                                    </td>
                                    <td>
                                        edit
                                </td>
                                </tr>
                                <MenuItem items={items[key].slice(1)} category={key} markComplete={this.markComplete} />
                            </React.Fragment>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Menu;
