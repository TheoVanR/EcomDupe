import Link from "next/link";

const Logo = ({ colorWhite }) => {
    return (
        <div className="mx-8 absolute top-8 ">
            <Link
                id="logotxt"

                href="/"
                className={colorWhite ? "text-white" : "text-slate-950"}
            >
                ETON
            </Link>
        </div>
    );
};

export default Logo;
