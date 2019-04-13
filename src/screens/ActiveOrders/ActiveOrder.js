import React, { Component } from 'react';

class ActiveOrder extends Component {
    constructor(props) {
        super(props);
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
                seconds,
                minutes
            })
        }, 1000);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeOrder: nextProps.activeOrder
        })
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
                    {activeOrder.guest}
                </td>
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
                    {activeOrder.chef}
                </td>
                <td>
                    <div className="done" onClick={() => { this.props.markComplete(activeOrder.id) }}>Done</div>
                </td>
            </tr>
        )
    }
}

export default ActiveOrder;