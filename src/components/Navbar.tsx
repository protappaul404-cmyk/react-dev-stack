// Navbar Started
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", active: true },
        { label: "Technologies", active: false },
        { label: "Projects", active: false },
        { label: "About", active: false },
        { label: "Contact", active: false },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm px-4 sm:px-6 py-6 md:py-8">
            <div className="container mx-auto max-w-7xl">

                {/* Mobile / Tablet Navbar */}
                <div className="lg:hidden grid grid-cols-3 items-center">

                    {/* Menu - Left */}
                    <div className="flex justify-start">
                        <button
                            className="text-[#475569]"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Logo - Center */}
                    <div className="flex justify-center">
                        <img
                            src={Logo}
                            alt="Logo Text"
                            className="h-8 md:h-10 w-auto"
                        />
                    </div>

                    {/* Auth Buttons - Right */}
                    <div className="flex justify-end items-center gap-2">
                        <button className="text-[12px] sm:text-[14px] text-[#475569]">
                            Sign In
                        </button>

                        <button className="rounded-[50px] bg-[#D91B7E] text-white text-[12px] sm:text-[14px] px-3 sm:px-5 py-2">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden lg:flex items-center justify-between">

                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Logo Text"
                        className="h-10 w-auto"
                    />

                    {/* Nav Links */}
                    <ul className="flex gap-4 items-center">
                        {navLinks.map((link) => (
                            <li
                                key={link.label}
                                className={`font-semibold text-[14px] cursor-pointer ${link.active
                                    ? "text-[#DB2777]"
                                    : "text-[#475569]"
                                    }`}
                            >
                                {link.label}
                            </li>
                        ))}
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex gap-5 items-center">
                        <button className="text-[14px]">
                            Sign In
                        </button>

                        <button className="rounded-[50px] bg-[#D91B7E] text-white text-[14px] px-5 py-2">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile / Tablet Dropdown */}
                {isOpen && (
                    <div className="lg:hidden mt-6 flex flex-col gap-6">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.label}
                                    className={`font-semibold text-[14px] cursor-pointer ${link.active
                                        ? "text-[#DB2777]"
                                        : "text-[#475569]"
                                        }`}
                                >
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
