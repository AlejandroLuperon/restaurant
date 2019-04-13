import React, { PureComponent, Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Alert.css';

class Alert extends Component {
    // constructor(props) {
    //     super(props);
    //     const { active, message } = props;
    //     this.state = {
    //         active,
    //         message
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     const { active, message } = nextProps;
    //     if (active !== this.state.active) {
    //         this.setState({
    //             active,
    //             message
    //         })
    //         this.interval = setTimeout(() => {
    //             this.setState({
    //                 active: false,
    //                 message: ""
    //             })
    //         }, 2000)
    //     }

    // }

    // componentWillUnmount() {
    //     console.log("hello")
    //     clearTimeout(this.interval);
    // }

    render() {
        const { active, message } = this.props;
        console.log(active)
        return (
            <div className={"card alert-main " + (active ? "alert-active" : "alert-inactive")}>
                <div class="card-body alert-body">
                    {message}
                </div>
            </div>

        )
    }
}

export default Alert;
