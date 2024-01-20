import Image from "next/image";
import "/src/app/globals.css";

const Hero = () => {
  return (
    <>
      <section className="hero max-w-6xl mx-auto">
        <div className="py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-brandsecondary">
            Lets get <br /> <span className="text-brand">Food & Drinks</span>{" "}
            <br />
            to Cheer you Up!
          </h1>
          <p className="my-4 text-brandsecondary text-sm sm:text-base lg:text-lg xl:text-xl">
            What makes a normal day cheerful? Well we think its food and drinks
            with good company and vibes. If you think the same then you are at
            the right place!
          </p>
          <div>
            <button className="bg-brand text-brandsecondary px-3 py-2 rounded-full mt-4 text-sm sm:text-base lg:text-lg xl:text-xl">
              Order now
            </button>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src="/alfredo.png"
            layout="fill"
            objectFit="contain"
            alt="Hero Image"
            // <a href="https://www.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_78178740.htm#query=food%20transparent&position=0&from_view=keyword&track=ais&uuid=95e3f17e-e0b8-4180-a639-f3b6fdd12bfa">Image by tohamina</a> on Freepik
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
