import React, {
    Component
} from 'react';
import Alert from '../../components/Alert/Alert';
import ActiveOrder from './ActiveOrder';
import './ActiveOrders.css'

class ActiveOrders extends Component {
    constructor() {
        super();
        this.state = {
            activeOrders: [],
            active: false,
            message: ""
        }
    }

    componentDidMount() {
        fetch("http://54.166.71.233/active_orders")
            .then(res => res.json())
            .then(response => {

                response = response.map(r => ({
                    ...r,
                    guest: "Bhaskar",
                    count: 1,
                    chef: "Chef"
                }))
                console.log(response)
                this.setState({
                    activeOrders: response
                })
            })

    }

    markComplete = (id) => {
        let { activeOrders } = this.state;
        console.log(activeOrders, id)
        activeOrders = activeOrders.filter(activeOrder => (activeOrder.id !== id))
        console.log(activeOrders)
        this.setState({
            activeOrders,
            active: true,
            message: `Order number ${id} prepared`
        })
    }

    render() {
        const { activeOrders, active, message } = this.state;
        return (
            <div className="container active-order-container">
                <Alert message={message} active={active} />
                <div className="row margin-0">
                    <div className="count">
                        <div className="count-number">
                            6
                        </div>
                        <div className="count-name">
                            ACTIVE ORDERS
                        </div>

                    </div>
                    <div className="count">
                        <div className="count-number">
                            6
                        </div>
                        <div className="count-name">
                            DONE ORDERS
                        </div>
                    </div>
                    <div className="count">
                        <div className="count-number">
                            6
                        </div>
                        <div className="count-name">
                            CHEFS ON DUTY
                        </div>
                    </div>
                </div>
                <div class="orders-title">
                    LIST OF ORDERS
                </div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Table</th>
                            <th scope="col">Guests</th>
                            <th scope="col">Order</th>
                            <th scope="col">Count</th>
                            <th scope="col">Time</th>
                            <th scope="col">Chef</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {activeOrders.map(activeOrder => (
                            <ActiveOrder activeOrder={activeOrder} markComplete={this.markComplete} />
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ActiveOrders;