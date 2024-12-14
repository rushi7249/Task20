import React from 'react'
import "./Shoe.css";
import icon from "../Imgaes/icon.png"
import brown_leather_shoe from "../Imgaes/brown-leather-shoes.jpg"
import pair_trainers from "../Imgaes/pair-trainers.jpg"
import sport_shoe from "../Imgaes/pexels-melvin-buezo-1253763-2529148.jpg"
import formal_shoe from "../Imgaes/pexels-webdonut-19090.jpg"
import casual_shoe from "../Imgaes/shoes.jpg"

const Shoe = () => {
    const [cart, setCart] = React.useState([]);

    const shoes = [
        {
            img: casual_shoe,
            price: "$70",
            name: "White Casual Sneaker",
            btn: "Add To Cart"
        },
        {
            img: sport_shoe,
            price: "$60",
            name: "Sport Shoe",
            btn: "Add To Cart"
        },
        {
            img: formal_shoe,
            price: "$120",
            name: "Formal Shoe",
            btn: "Add To Cart"
        },
        {
            img: pair_trainers,
            price: "$100",
            name: "Pair of Trainers",
            btn: "Add To Cart"
        },
        {
            img: brown_leather_shoe,
            price: "$160",
            name: "Brown Leather Shoe",
            btn: "Add To Cart"
        }
    ];
    const addToCart = (shoe) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.name === shoe.name);
            if (existingItem) {
                // If the item is already in the cart, update the quantity
                return prevCart.map(item =>
                    item.name === shoe.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If the item is not in the cart, add it with quantity 1
                return [...prevCart, { ...shoe, quantity: 1 }];
            }


        });
    };
    const decrement = (name) => {
        setCart((prevCart) =>
            prevCart.map((item, index) => (
                item.name === name ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            )).filter(item => item.quantity > 0)
        )
    }
    const increment = (name) => {

        setCart((prevCart) =>
            prevCart.map((item, index) => (
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            ))
        )

    }

    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

    return (
        <>
            <div className="shoe_store">
                <nav className="navBar">
                    <ul className="nav_link">
                        <li className="icon"><img src={icon} alt="icon"/></li>
                        <li>Home</li>
                        <li>
                            Categories
    </li>
                        <li>
                            About Us
    </li>
                    </ul>
                </nav>
                <section className="main_section">
                    <div className="main_section_div1">
                        {shoes.map((shoe, index) => (
                            <div key={index} className="shoe_card">
                                <img src={shoe.img} alt={shoe.name} className="shoe_image" />
                                <h5 className="shoe_card_h5">{shoe.name}</h5>
                        <p className="shoe_card_p">{shoe.price}</p>
                                <button onClick={() => addToCart(shoe)}>{shoe.btn}</button>

                            </div>
                        ))}
                    </div>
                    <div className="main_section_div2">
                        <div className="cart">
                            <h5>Cart</h5>
                            <table className="cart_table">

                                <tbody>
                                    {cart.map((item, i) => (
                                        <tr key={i}>
                                            <td className="cart_img"><img src={item.img} alt={item.name} /></td>
                                            <td>{item.name}</td>
                                            <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td> 
                                            <td><button onClick={() => decrement(item.name)}>-</button> {item.quantity} <button onClick={() => increment(item.name)}>+</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="total">
                                <h4>Total: ${total.toFixed(2)}</h4>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Shoe;
