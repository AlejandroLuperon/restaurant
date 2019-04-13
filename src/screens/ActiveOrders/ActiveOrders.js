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
            message: "",
            completed: []
        }
    }

    componentDidMount() {
        this.getActiveOrders();
        this.timer = setInterval(() => this.getActiveOrders(), 5000);
    }

    componentWillUnmount() {
        this.timer = null; // here...
    }

    getActiveOrders() {
        fetch("http://54.166.71.233/active_orders?vendor_id=1")
            .then(res => res.json())
            .then(response => {
                console.log(response, "LOOK HERE");
                const {completed} = this.state;
                response = response.map((r, i) => ({
                    ...r,
                    count: 1,
                    id: i,
                    chef: "Chef"
                }))
                response = response.filter(r => completed.indexOf(r.special_id) === -1)

                this.setState({
                    activeOrders: response
                })
            })

    }

    markComplete = (special_id) => {
        let { activeOrders, completed } = this.state;
        // console.log(activeOrders, id)
        activeOrders = activeOrders.filter(activeOrder => (activeOrder.special_id !== special_id))
        console.log(activeOrders)
        // fetch("http://54.166.71.233/active_orders?vendor_id=1",{
        //     method: 'POST'
        // })
        completed.push(special_id)
        this.setState({
            activeOrders,
            active: true,
            message: `Order number ${special_id} prepared`,
            completed
        })
        setTimeout(() => {
            this.setState({
                active: false,
                message: ""
            })
        }, 2000)
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
                            <th scope="col">Order</th>
                            <th scope="col">Count</th>
                            <th scope="col">Special Instructions</th>
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
