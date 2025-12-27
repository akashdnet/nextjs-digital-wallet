"use client";

import Link from "next/link";
import { useState } from "react";
import { brandDetails, contactInfo } from "../../../data";
import Reveal from "./Reveal";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thanks for contacting us! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Contact Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Get in Touch with <span className="gradient-text">{brandDetails.name}</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Have questions or need support? Our team is here to help you 24/7.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <Reveal delay={0.2}>
                        <div className="bg-white rounded-3xl p-8 shadow-xl h-full border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fas fa-map-marker-alt text-primary-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Our Office</h4>
                                        <p className="text-gray-600">
                                            {contactInfo.officeAddress}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fas fa-phone-alt text-green-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                                        <p className="text-gray-600">
                                            <a href={contactInfo.phoneLink} className="hover:text-primary-600 transition-colors">
                                                {contactInfo.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fas fa-envelope text-orange-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">
                                            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-600 transition-colors">
                                                {contactInfo.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                                        <i className="fab fa-whatsapp text-green-600 text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                                        <p className="text-gray-600">
                                            <a href={contactInfo.whatsappLink} className="hover:text-primary-600 transition-colors">
                                                {contactInfo.whatsapp}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                                <div className="flex space-x-4">

                                    {contactInfo.socialLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                                        >
                                            <i className={link.icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="bg-white rounded-3xl p-8 shadow-xl h-full border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full gradient-bg text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
