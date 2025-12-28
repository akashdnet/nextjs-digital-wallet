"use client";

import { brandDetails, categorizedServices, navLinks } from "@/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
                }`}
        >
            <div className="gradient-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <div className="shrink-0">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                                    <i className="fas fa-wallet text-primary-600 text-xl"></i>
                                </div>
                                <span className="text-white text-xl font-bold hidden sm:block">
                                    {brandDetails.name}
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link
                                href="#home"
                                className="nav-link text-white font-medium hover:text-primary-200 transition-colors"
                            >
                                Home
                            </Link>
                            {/* Services Mega Menu */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button
                                    className="nav-link text-white font-medium hover:text-primary-200 transition-colors flex items-center space-x-1"
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                >
                                    <span>Services</span>
                                    <i
                                        className={`fas fa-chevron-down text-xs transition-transform ${isServicesOpen ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </button>
                                {/* Mega Menu */}
                                <div
                                    className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transition-all duration-300 ${isServicesOpen
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible translate-y-2"
                                        }`}
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                                                Money Transfer
                                            </h3>
                                            <div className="space-y-3">
                                                {categorizedServices.moneyTransfer.map((service, idx) => (
                                                    <ServiceItem
                                                        key={idx}
                                                        icon={service.icon}
                                                        title={service.title}
                                                        desc={service.desc}
                                                        color={service.color}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                                                Bill & Recharge
                                            </h3>
                                            <div className="space-y-3">
                                                {categorizedServices.billRecharge.map((service, idx) => (
                                                    <ServiceItem
                                                        key={idx}
                                                        icon={service.icon}
                                                        title={service.title}
                                                        desc={service.desc}
                                                        color={service.color}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <Link
                                            href="#services"
                                            className="flex items-center justify-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                        >
                                            <span>View All Services</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {navLinks.filter(link => link.label !== "Home").map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="nav-link text-white font-medium hover:text-primary-200 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-white font-medium hover:text-primary-200 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="register"
                                className="bg-white text-primary-600 px-6 py-2.5 rounded-full font-semibold hover:bg-primary-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            <i
                                className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
                            ></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-6 space-y-4">
                    <MobileNavLink href="#home" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="border-b border-gray-100"></div>
                    <div>
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full py-3 px-4 text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                        >
                            <span>Services</span>
                            <i
                                className={`fas fa-chevron-down text-xs transition-transform ${isServicesOpen ? "rotate-180" : ""
                                    }`}
                            ></i>
                        </button>
                        <div
                            className={`pl-4 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${isServicesOpen ? "max-h-[400px]" : "max-h-0"
                                }`}
                        >
                            {categorizedServices.moneyTransfer.map((service, idx) => (
                                <MobileSubLink key={idx} icon={service.icon} color={`text-${service.color}-500`} label={service.title} />
                            ))}
                            {categorizedServices.billRecharge.map((service, idx) => (
                                <MobileSubLink key={idx} icon={service.icon} color={`text-${service.color}-500`} label={service.title} />
                            ))}
                        </div>
                    </div>
                    {navLinks.filter(link => link.label !== "Home").map((link, idx) => (
                        <MobileNavLink key={idx} href={link.href} label={link.label} onClick={() => setIsMobileMenuOpen(false)} />
                    ))}

                    <div className="border-t border-gray-100 pt-4 space-y-3">
                        <Link
                            href="login"
                            className="block w-full text-center py-3 text-primary-600 font-semibold border-2 border-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="register"
                            className="block w-full text-center py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function ServiceItem({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
    const colorClasses: Record<string, string> = {
        primary: "bg-primary-100 text-primary-600 group-hover:bg-primary-600",
        green: "bg-green-100 text-green-600 group-hover:bg-green-600",
        orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600",
        purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600",
        blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600",
        pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600",
    };

    return (
        <Link
            href="#"
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
        >
            <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${colorClasses[color]}`}
            >
                <i className={`${icon} group-hover:text-white transition-colors`}></i>
            </div>
            <div>
                <p className="font-medium text-gray-800">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
        </Link>
    );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block py-3 px-4 text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
        >
            {label}
        </Link>
    );
}

function MobileSubLink({ icon, color, label }: { icon: string; color: string; label: string }) {
    return (
        <Link href="#" className="flex items-center py-2 px-4 text-gray-600 hover:text-primary-600 transition-colors">
            <i className={`${icon} mr-3 ${color}`}></i>
            {label}
        </Link>
    );
}
