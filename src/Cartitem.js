import React from "react";


class CartItem extends React.Component {
   
    increaseQuantity = () => {
        //   there are basically two ways to increase quantity
        // setState form1 - if previous is not required use this
        this.setState({
            qty: this.state.qty + 1
        });

       // setState form2 - if previous state is required use this
        // this.setState((prevState) => {
        //     return{
        //         qty:prevState.qty + 1
        //     }
        // });

    }

    decreaseQuantity = () => {

        const { qty } = this.state;
        if(qty === 0){
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }

    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={Style.image} alt='' />
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img
                            alt='increase'
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt='decrease'
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt='delete'
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                        />

                    </div>

                </div>

            </div>
        );
    }
}

const Style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;