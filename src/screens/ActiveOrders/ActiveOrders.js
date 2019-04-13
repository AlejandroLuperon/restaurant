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
                this.setState({
                    activeOrders: response
                })
            })

    }

    markComplete = (id) => {
        let { activeOrders } = this.state;
        activeOrders = activeOrders.filter(activeOrder => (activeOrder.id !== id))
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
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col">Table Number</th>
                            <th scope="col">Items</th>
                            <th scope="col">Count</th>
                            <th scope="col">Time</th>
                            <th scope="col">Mark Complete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {activeOrders.map(activeOrder => (
                            <ActiveOrder activeOrder={activeOrder} markComplete={this.markComplete}/> 
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ActiveOrders;