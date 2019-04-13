import React, { Component } from 'react';
import MenuItem from './MenuItem'
import AddMenuItem from './AddMenuItem';
import "./Menu.css";
import add from '../../assets/add.png';
import edit from '../../assets/edit.png'

const data = [
    {
        item: "Pancake",
        ingredients: "pan, cake",
        price: 2,
        category: "Pancakes",
        calories: 200
    },
    {
        item: "Pancake",
        ingredients: "pan, cake",
        price: 2,
        category: "Pancakes",
        calories: 400
    },
    {
        item: "Pancake",
        ingredients: "pan, cake",
        price: 2,
        category: "Pancakes",
        calories: 500
    }

]

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            items: data,
            isOpen: false
        }
    }

    componentDidMount() {
        fetch("http://54.166.71.233/active_orders?vendor_id=1")
            .then(res => res.json())
            .then(response => {
                console.log(response)
                console.log(data)

                this.setState({
                    items: data
                })
            })
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleAddItem = (data) => {
        console.log(data)
        let { items } = this.state;
        items.push(data);
        this.setState({
            items,
            isOpen: false
        })
    }

    render() {
        const { items, isOpen } = this.state;
        var obj = {};
        items.forEach(d => {
            if (obj[d.category]) obj[d.category].push(d)
            else obj[d.category] = [d]
        })
        return (
            <div class="container menu-container">
                <div class="flex-row d-flex justify-content-between menu-header align-items-end">
                    <h3>RESTAURANT MENU</h3>
                    <span onClick={this.toggleModal}><img src={add} /> Add Menu item</span>
                </div>
                <AddMenuItem isOpen={isOpen} toggleModal={this.toggleModal} handleAddItem={this.handleAddItem} categories={Object.keys(obj)}/>
                <table className="table table-bordered menu-table" >
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

                        {Object.keys(obj).map(key => (
                            <React.Fragment>
                                <tr>
                                    <th rowSpan={obj[key].length} style={{ verticalAlign: "middle" }}>
                                        <div>
                                            <p>{key}</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p >
                                            {obj[key][0].item}
                                        </p>
                                        <p className="sub-items">
                                            Ingredients : <span>{obj[key][0].ingredients}</span>
                                        </p>
                                        <p className="sub-items">
                                            Calories : <span>{obj[key][0].calories}</span>
                                        </p>

                                    </td>
                                    <td>
                                        <p>{obj[key][0].price} $</p>
                                    </td>
                                    <td>
                                        <p className="edit"><img src={edit} />Edit</p>
                                    </td>
                                </tr>
                                <MenuItem items={obj[key].slice(1)} category={key} markComplete={this.markComplete} />
                            </React.Fragment>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Menu;
