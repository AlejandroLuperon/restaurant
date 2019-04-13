import React, { Component } from 'react';
import edit from '../../assets/edit.png'

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
                        <p className="sub-items">
                            Ingredients : <span>{item.ingredients}</span>
                        </p>
                        <p className="sub-items">
                            Calories : <span>{item.calories}</span>
                        </p>


                    </td>
                    <td>
                        <p>{item.price} $</p>
                    </td>
                    <td>
                        <p className="edit"><img src={edit} />Edit</p>
                    </td>
                </tr>
            ))

        )
    }
}

export default MenuItem