import Image from 'next/image';
import Container from 'postcss/lib/container';
import shirt1 from '/public/shirt1.webp';
import shirt2 from '/public/shirt2.webp';
import ProductCard from '/app/Components/Productcard';
import etonlazy from '/public/etonlazy.webp';

export default function Home() {
  return (
    <div className="h-screen">
      <main>
        <section>
          <div className="overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="/lazy2.webp"
              alt="lazy"
            />
          </div>
        </section>
      </main>
    </div>

  );
}
