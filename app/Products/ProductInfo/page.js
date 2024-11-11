import Image from 'next/image';
import Container from 'postcss/lib/container';
import shirt1 from '/public/shirt1.webp';
import shirt2 from '/public/shirt2.webp';
import ProductCard from '/app/Components/Productcard';

export default function ProductInfo() {
    return (
        <div className="h-screen">
            <main>
                <div className="grid grid-cols-3 gap-4">
                    <div class="z-0 ">
                        <Image src="/shirt1.webp" alt="shirt1" width={600} height={1000} />
                    </div>
                    <div class="z-0 ">
                        <Image src="/shirt2.webp" alt="shirt2" width={600} height={1000} />
                    </div>
                    <div>
                        <div class='container h-full w-full  '>
                            <ProductCard></ProductCard>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
