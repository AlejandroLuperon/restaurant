import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { item } = this.props;
        return (
            <tr key={item.id}>
                <th rowSpan={item.length}>
                    {item.table_number}
                </th>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.count}
                </td>
                <td>
                    "Ingredients"
                </td>
            </tr>
        )
    }
}

export default MenuItem