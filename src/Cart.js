import React from "react";
import Cartitem from './Cartitem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    id:1,
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: ''
                },
                {
                    id:2,
                    price: 999,
                    title: 'Phone',
                    qty: 10,
                    img: ''
                },
                {
                    id:3,
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: ''
                }
            ]
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product)=> {
                    return <Cartitem 
                    product={product} 
                    key={product.id} 
                    />
                })}

            </div>
        );

    }
}


export default Cart;