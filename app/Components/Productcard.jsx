import CartBtn from "./CartBtn";
import Link from "next/link";

const ProductCard = ({ id, title, price }) => {

    return (
        <div className="relative p-4 w-full border rounded-lg shadow-md">
            <img className="w-[20vw] h-[30vh] object-cover" src="/shirt1.webp" alt={title} />

            <div className="p-2">
                <Link href="/productId"  className="text-2xl font-medium">{title}</Link>
            </div>
            <div className="p-2">
                <p className="text-base">{price}</p>
            </div>
            <CartBtn id={id} title={title} price={price} />
        </div>
    );
};

export default ProductCard;
