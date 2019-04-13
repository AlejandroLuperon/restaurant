import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { items } = this.props;
        return (

            items.map(item => (
                <tr key={item.id}>
                    <td>
                        <p>
                            {item.item}
                        </p>
                        <p>
                            {item.ingredients}
                        </p>

                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td>
                        edit
                </td>
                </tr>
            ))

        )
    }
}

export default MenuItem