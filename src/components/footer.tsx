import { Facebook, Instagram, Linkedin, LucideProps, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Logo = (props: LucideProps) => {
    return (
        <div>
            <img
                alt="Nuqi Logo"
                src={"/logo2.png"}
                className={props && props.className ? props.className : "h-14 w-auto p-2 object-contain"}
            />
        </div>
    );
};

export function Footer() {
    const [activeTab, setActiveTab] = useState<string>(window.location.pathname);

    useEffect(() => {
        // Update activeTab when the URL changes (e.g., hash navigation)
        const handleHashChange = () => setActiveTab(window.location.pathname + window.location.hash);
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleScrollToSection = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetHash: string
    ) => {
        event.preventDefault();

        if (window.location.pathname !== "/") {
            // Navigate to home page with hash
            window.location.href = `/${targetHash}`;
        } else {
            // Scroll directly to the section
            const target = document.querySelector(targetHash);
            target?.scrollIntoView({ behavior: "smooth" });
        }
        setActiveTab(`/${targetHash}`); // Update activeTab state
    };

    const isActive = (href: string) => activeTab === href;

    return (
        <footer className="bg-[#000] text-white -mt-20 font-poppins">
            <div className="container mx-auto px-4 py-10">
                {/* Logo and Social Media Section */}
                <div className="flex flex-col items-center mt-20 text-center text-white gap-10">
                    <Logo className="h-14 w-auto" />
                    <div className="flex gap-8">
                        <a
                            aria-label="Contact by Mail"
                            className="text-primary hover:text-primary-foreground transition"
                            href="mailto:support@nuqiwealth.in"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            aria-label="Follow on Instagram"
                            className="text-primary hover:text-primary-foreground transition"
                            href="https://www.instagram.com/nuqi_wealth/"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            aria-label="Follow on Facebook"
                            className="text-primary hover:text-primary-foreground transition"
                            href="https://www.facebook.com/Nuqiadvisory"
                        >
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a
                            aria-label="Follow on Linkedin"
                            className="text-primary hover:text-primary-foreground transition"
                            href="https://www.linkedin.com/company/nuqi-wealth"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-10 text-base font-poppins text-center">
                    <a
                        href="/"
                        className={`${
                            isActive("/") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/")}
                    >
                        Home
                    </a>
                    <a
                        href="/advisory"
                        className={`${
                            isActive("/#advisory") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={(e) => handleScrollToSection(e, "#advisory")}
                    >
                        Advisory
                    </a>
                    <a
                        href="/prive"
                        className={`${
                            isActive("/#nuqiprive") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={(e) => handleScrollToSection(e, "#nuqiprive")}
                    >
                        Prive
                    </a>
                    <a
                        href="/IRIS"
                        className={`${
                            isActive("/IRIS") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/IRIS")}
                    >
                        IRIS
                    </a>
                    <a
                        href="/ethosphere"
                        className={`${
                            isActive("/ethosphere") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/ethosphere")}
                    >
                        Ethosphere
                    </a>
                    <a
                        href="/Privacy"
                        className={`${
                            isActive("/Privacy") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/Privacy")}
                    >
                        Legal
                    </a>
                    <a
                        href="/About"
                        className={`${
                            isActive("/About") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/About")}
                    >
                        About
                    </a>
                    <a
                        href="/partnership"
                        className={`${
                            isActive("/partnership") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/partnership")}
                    >
                        Partnership
                    </a>
                    <a
                        href="/news"
                        className={`${
                            isActive("/news") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/news")}
                    >
                        News
                    </a>
                    <a
                        href="/ContactsPage"
                        className={`${
                            isActive("/ContactsPage") ? "text-cyan-400 font-bold" : "text-white hover:text-cyan-400"
                        }`}
                        onClick={() => setActiveTab("/ContactsPage")}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Address Section */}
                <div className="mt-10 text-center text-gray-400 text-sm">
                    <p>UAE: Office 501, 05th Floor, Innovation One, DIFC, Dubai, UAE</p>
                </div>

                {/* Disclaimer Section */}
                <div className="mt-10 text-center text-xs text-gray-400 leading-relaxed">
                    <p>
                        © 2023 Nuqi Digital Wealth Limited. All rights reserved. <br />
                        Nuqi Digital Wealth Limited is regulated by the Dubai Financial Services Authority
                        (“DFSA”) in the Dubai International Financial Center (“DIFC”) and holds a <br />
                        Category 3C license with a Retail Client Endorsement. Arranging and advising of financial
                        services and managing assets.<br /> Nuqi Digital Wealth Ltd is not authorised to hold client
                        money. Therefore, the client money rules do not apply to the business currently undertaken by
                        Nuqi Digital Wealth Limited. <br />
                        Nuqi Digital Wealth Limited’s registered address is Unit IH-00-01-05-OF-01, Level 5,
                        Innovation Hub, DIFC, Dubai, United Arab Emirates. <br /> <br /> <br />
                        <span>
                            Please visit our{" "}
                            <a
                                href="/disclaimer"
                                target="_blank"
                                className="underline underline-offset-2"
                            >
                                Disclaimer Notice page
                            </a>{" "}
                            for further information.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
