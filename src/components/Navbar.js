import Image from "next/image";
import Link from "next/link";
import "/src/app/globals.css";

const Navbar = () => {
  return (
    <header className="navbar p-4 flex flex-row justify-between top-0 items-center">
      <Link className="" href="/">
        <Image src="/logo.png" alt="Logo Here" width={80} height={80} />
      </Link>
      <div className="navitems flex gap-10 text-lg">
        <Link href="/menu" className="">
          Menu
        </Link>
        {/* <button>Order</button> */}
        <Link href="/about">About</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div className="text-lg bg-brandsecondary rounded-md px-3 py-2 text-white">
          Login
        </div>
        <div className="text-lg">Cart</div>
      </div>
    </header>
  );
};

export default Navbar;
