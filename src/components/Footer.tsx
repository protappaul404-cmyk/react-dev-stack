// Footer section Started
import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#E5E7EB] pt-12 md:pt-16">

            {/* Main footer content */}
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 lg:gap-12">

                    {/* Brand information */}
                    <div className="md:max-w-sm">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="w-auto h-8 mb-3"
                        />

                        <p className="text-[#64748B] text-[12px] leading-5 mb-4">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Social links */}
                        <ul className="flex gap-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#475569] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#475569] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#475569] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Product links */}
                    <div>
                        <h4 className="font-bold text-sm text-[#0F172A] mb-4">
                            PRODUCT
                        </h4>

                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="font-bold text-sm text-[#0F172A] mb-4">
                            COMPANY
                        </h4>

                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div>
                        <h4 className="font-bold text-sm text-[#0F172A] mb-4">
                            LEGAL
                        </h4>

                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#E5E7EB] my-8"></div>

                {/* Copyright and bottom links */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-10 md:pb-12">

                    <p className="text-[#64748B] text-[12px]">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-[#64748B] text-[12px] hover:text-[#D81B7E] transition-colors"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
