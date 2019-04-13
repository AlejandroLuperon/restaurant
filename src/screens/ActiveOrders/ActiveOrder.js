import React, { Component } from 'react';

class ActiveOrder extends Component {
    constructor(props) {
        super(props);
        let activeOrder = props.activeOrder;
        this.state = {
            activeOrder: props.activeOrder,
            seconds: 57,
            minutes: 1
        }
        setInterval(() => {
            let {seconds, minutes} = this.state;
            seconds+=1;
            if(seconds === 60) {
                seconds = 0;
                minutes += 1;
            }
            this.setState({
                activeOrder,
                seconds,
                minutes
            })
        }, 1000);
    }

    render() {
        let { activeOrder, seconds, minutes} = this.state;
        // let time = activeOrder.time;
        // let minutes = Math.floor(time / 60);
        // let seconds = time - Math.floor(time / 60);
        // if (seconds > 59) {

        // }
        if (Math.floor(minutes / 10) === 0) minutes = "0" + minutes;
        if (Math.floor(seconds / 10) === 0) seconds = "0" + seconds;

        return (
            <tr key={activeOrder.id}>
                <th>
                    {activeOrder.table_number}
                </th>
                <td>
                    {activeOrder.name}
                </td>
                <td>
                    {activeOrder.count}
                </td>
                <td>
                    {minutes + ":" + seconds}
                </td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => { this.props.markComplete(activeOrder.id) }}>Done</button>
                </td>
            </tr>
        )
    }
}

export default ActiveOrder;