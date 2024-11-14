import { useCart } from '../CartContext';

const { cartItems } = useCart(); // Access cartItems and functions from CartContext



const CItem = (index) => {
    <div className='bg-gray-100'>
        <img src={item.image} alt={item.title} className="w-6 h-6 object-cover rounded-lg" />
        <div>
            {cartItems.map((item, index) => (
                <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                    <button onClick={() => removeItem(index)}>Remove</button>
                </li>
            ))}
        </div>
    </div>


}; export default CItem;