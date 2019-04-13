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
      this.getActiveOrders();
      this.timer = setInterval(()=> this.getActiveOrders(), 5000);
    }

    componentWillUnmount() {
      this.timer = null; // here...
    }

    getActiveOrders() {
        fetch("http://54.166.71.233/active_orders?vendor_id=1")
            .then(res => res.json())
            .then(response => {
                console.log(response, "LOOK HERE");
                response = response.map(r => ({
                    ...r,
                    guest: "Bhaskar",
                    count: 1,
                    chef: "Chef"
                }))

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
                <div className="row margin-0">
                    <div className="count">
                        <div className="count-number">
                            {activeOrders.length}
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
                <div className="orders-title">
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
                            <th scope="col">Resolve</th>
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
