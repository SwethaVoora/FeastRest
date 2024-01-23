"use client";
import Image from "next/image";
import Link from "next/link";
import "/src/app/globals.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user } = useUser();
  // console.log(user);

  return (
    <header className="navbar p-4 flex flex-row justify-between top-0 items-center">
      <Link className="" href="/">
        <Image src="/logo.png" alt="Logo Here" width={80} height={80} />
      </Link>
      <nav className="navitems flex gap-10 text-lg">
        <Link href="/menu" className="">
          Menu
        </Link>
        {/* <button>Order</button> */}
        <Link href="/about">About</Link>
        <Link href="/feedback">Feedback</Link>
      </nav>
      <nav className="items-center text-brandsecondary">
        {user ? (
          <div className="flex flex-row gap-5">
            <a
              href="/profile"
              className="text-4xl p-2 text-brandsecondary flex items-center justify-center "
            >
              <CgProfile />
            </a>
            <Link
              href="/api/auth/logout"
              className="text-lg rounded-lg px-3 py-2 bg-brandsecondary text-white"
            >
              Logout
            </Link>
          </div>
        ) : (
          <Link
            href="/api/auth/login"
            className="text-lg rounded-md px-3 py-2 bg-brandsecondary text-white"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
