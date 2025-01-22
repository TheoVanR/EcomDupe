import CartBtn from "@/app/Components/CartBtn";
import Logo from "@/app/Components/Logo";


export default async function ProductPage({ params }) {
    const id = (await params).id;
    const product = (await params).product;
    const title = (await params).title;
    const myID = id;
    console.log(myID);



    const price = (await params).price;



    return (
        <>

            <div className="grid grid-cols-2  gap-4">
                <Logo />
                <img className="object-cover" src={"/shirt1.webp"} alt={title} />
                <div className='flex flex-col items-left justify-center h-[50vh] p-4'>
                    <div className="my-[14rem]">

                    </div>
                    <div className="p-2">
                        <p className="font-medium">{title}</p>
                    </div>
                    <div className="p-2">
                        <p className="text-base">${price}</p>
                    </div>
                    <CartBtn id={id} />
                </div>
            </div>
            <div className='h-[10rem]'></div>
        </>
    );
}
