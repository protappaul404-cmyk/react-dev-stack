// Banner section Started
import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 mb-16 md:mb-28">

            {/* Banner content */}
            <div className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left">
                <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-extrabold leading-tight lg:leading-none pb-4 md:pb-6 text-[#0F172A]">
                    Build Your Ideal{" "}
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="text-[16px] sm:text-[18px] leading-relaxed pb-8 md:pb-10 text-[#475569]">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
                    <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg font-semibold text-white px-6 py-3">
                        Explore Technologies
                    </button>

                    <button className="border border-[#E5E7EB] bg-white text-[#374151] rounded-lg px-6 sm:px-10 py-3">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Banner illustration */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <img
                    src={BannerStack}
                    alt="Development technology stack illustration"
                    className="w-full max-w-70 sm:max-w-90 md:max-w-110 lg:max-w-130 h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default Banner;
