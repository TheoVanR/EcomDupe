import CartBtn from "./CartBtn";
import Link from "next/link";

const ProductCard = ({ id, title, price }) => {
    const debuf= () => {
        console.log('Product:', id);
    }
    return (
        <div className="relative p-4 w-3/4 border rounded-lg shadow-md">
            <img className="w-[20vw] h-[30vh] object-cover" src="/shirt1.webp" alt={title} />

            <div className="p-2">
                <Link onClick={debuf} href={`/productid/${id}`} className=" font-medium">{title}</Link>
            </div>
            <div className="p-2">
                <p className="text-base">{price}</p>
            </div>
            <CartBtn id={id}  />
        </div>
    );
};

export default ProductCard;
