import CartBtn from "./CartBtn";
import Link from "next/link";

const ProductCard = ({ id, title, price }) => {
    const product = {
        id: id,
        title: title,
        price: price
    };

    const debug = () => {
        console.log(product);
    };

    return (
        <div className="p-4 border shadow-md w-full">
            <div className="flex justify-center">
                <img
                    className="w-[20vw] h-[30vh] object-cover"
                    src="/shirt1.webp"
                    alt={product.title}
                />
            </div>

            <div className="p-2 text-left">
                <Link

                    href={`/Products/${product.id},${product.title}`}
                    className="font-medium"
                >
                    {product.title}
                </Link>
            </div>
            <div className="p-2 text-left">
                <p className="text-base">${product.price}</p>
            </div>

            <div className="p-2 text-left">
                <CartBtn id={product.id} title={product.title} price={product.price} />

            </div>
        </div>
    );
};

export default ProductCard;
