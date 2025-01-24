import CartBtn from "./CartBtn";
import Link from "next/link";

const ProductCard = ({ id, title, price }) => {
    const debug = () => {
        console.log({ id, title, price });
    };


    return (
        <div className="p-4 border h-full shadow-md w-full">
            <div className="flex justify-center">
                <img
                    className="w-[20vw] h-[30vh] object-cover"
                    src="/shirt2.webp"
                    alt={title}
                />
            </div>

            <div className="p-2 text-left">
                <Link href={`/Products/${id, title}`} className="font-medium">
                    {title}
                </Link>
            </div>
            <div className="p-2 text-left">
                <p className="text-base">${price}</p>
            </div>

            <div className="p-2 text-left">
                <CartBtn id={id} title={title} price={price} />
            </div>
        </div>
    );
};

export default ProductCard;
