import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;   ---Not much efficient way---

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        // dispatch an action
        dispatch(clearCart());
    }

    return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 mx-auto">
        <button className="p-2 m-2 rounded-lg bg-black text-white"
            onClick={handleClearCart}
        >
            Clear Cart
        </button>
        {cartItems.length === 0 && ( 
            <h1 className="text-xl">Cart is empty. Add items to the cart!</h1> 
            )}
            <ItemList items={cartItems} />
        </div>
        </div>
    );
};

export default Cart;