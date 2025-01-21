import Logo from "./Components/Logo";
export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="bg-black h-20 w-full top-0"></div>
      <div className="absolute inset-0">
        <img
          src="/lazy2.webp
        "
          alt="LandingImage"
          className="w-full h-full object-cover"
        />
        <Logo colorWhite={true} />
      </div>
    </section>
  );
}
