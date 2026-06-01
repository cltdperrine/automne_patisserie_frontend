import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <img
          src="/hero.jpg"
          alt="Hero Été"
          className="h-[650px] w-full object-cover md:h-[700px]"
        />

        {/* Card */}

        <div
          className="        absolute
        left-1/2
        top-1/2
        w-[90%]
        max-w-[550px]
        -translate-x-1/2
        -translate-y-1/2
        bg-[#F8F3F1]
        p-6
        md:left-auto
        md:right-20
        md:w-[550px]
        md:translate-x-0
        md:p-12"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#4B4B4B] md:text-sm">
            Nouveautés
          </p>

          <h1 className="mb-4 text-3xl font-black leading-tight text-[#5C1F0F] md:mb-6 md:text-6xl">
            L'été s'invite chez vous
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-[#4B4B4B] md:mb-10 md:text-lg">
            Une madeleine moelleuse subtilement parfumée à la lavande, pour une
            pause douce et ensoleillée.
          </p>

          <Link
            to="/products/53ada1a3-30f0-46bc-a044-32ec4e7a95e6"
            className="mt-8 inline-block bg-[#5C1F0F] px-8 py-4 text-white transition hover:opacity-90"
          >
            Commander
          </Link>
        </div>
      </section>
    </>
  );
}
