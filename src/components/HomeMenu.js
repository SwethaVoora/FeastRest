import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
const HomeMenu = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionHeader subHeader={"check out"} mainHeader={"MENU"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm sm:text-base lg:text-lg xl:text-xl">
        <Link
          href="/menu/appetizer"
          className="rounded-lg p-1 text-center border-black shadow-lg hover:bg-brand hover:shadow-2xl"
        >
          <picture>
            <img
              src="/pic2.jpg"
              alt="menu item image"
              className="rounded-t-lg"
            />
          </picture>
          <h4 className="py-3 hover:bg-brand rounded-b-lg duration-75">
            Appetizers
          </h4>
        </Link>
        <Link
          href="/menu/maincourse"
          className="rounded-lg p-1 text-center border-black shadow-lg hover:bg-brand hover:shadow-2xl"
        >
          <picture>
            <img
              src="/pic2.jpg"
              alt="menu item image"
              className="rounded-t-lg"
            />
          </picture>
          <h4 className="py-3 hover:bg-brand rounded-b-lg duration-75">
            Maincourse
          </h4>
        </Link>
        <Link
          href="/menu/dessert"
          className="rounded-lg p-1 text-center border-black shadow-lg hover:bg-brand hover:shadow-2xl"
        >
          <picture>
            <img
              src="/pic2.jpg"
              alt="menu item image"
              className="rounded-t-lg"
            />
          </picture>
          <h4 className="py-3 hover:bg-brand rounded-b-lg duration-75">
            Desserts
          </h4>
        </Link>
        <Link
          href="/menu/alcoholic-drink"
          className="rounded-lg p-1 text-center border-black shadow-lg hover:bg-brand hover:shadow-2xl"
        >
          <picture>
            <img
              src="/pic2.jpg"
              alt="menu item image"
              className="rounded-t-lg"
            />
          </picture>
          <h4 className="py-3 hover:bg-brand rounded-b-lg duration-75">
            Alcoholic Drinks
          </h4>
        </Link>
        <Link
          href="/menu/non-alcoholic-drink"
          className="rounded-lg p-1 text-center border-black shadow-lg hover:bg-brand hover:shadow-2xl"
        >
          <picture>
            <img
              src="/pic2.jpg"
              alt="menu item image"
              className="rounded-t-lg"
            />
          </picture>
          <h4 className="py-3 hover:bg-brand rounded-b-lg duration-75">
            Non-Alcoholic Drinks
          </h4>
        </Link>
      </div>
    </section>
  );
};

export default HomeMenu;
