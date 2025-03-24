import { Github, Home, AppWindow, Linkedin, NotebookText, Phone, User, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className="w-full h-auto" strokeWidth={1.5} />;
        case "about":
            return <User className="w-full h-auto" strokeWidth={1.5} />;
        case "projects":
            return <AppWindow className="w-full h-auto" strokeWidth={1.5} />;
        case "contact":
            return <Phone className="w-full h-auto" strokeWidth={1.5} />;
        case "github":
            return <Github className="w-full h-auto" strokeWidth={1.5} />;
        case "linkedin":
            return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
        case "resume":
            return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
        default:
            return <X className="w-full h-auto" strokeWidth={1.5} />;
    }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
    return (
            <div
                className="absolute cursor-pointer z-50"
                style={{ transform: `translate(${x}px, ${y}px)` }}
            >
                <Link
                    href={link}
                    target={newTab ? "_blank" : "_self"}
                    className="text-foreground rounded-full  items-center flex justify-center bg-background/20 border-2 border-blue-500/30 backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm "
                    aria-label={label}
                >
                    <span className="relative w-14 h-14 p-4 group-hover:text-cyan-400 group-hover:pause animate-spin-slow-reverse">
                        {getIcon(icon)}
                        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
                        <span className=" absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                        bg-background text-foreground text-sm shadow-lg whitespace-nowrap">
                            {label}
                        </span>
                    </span>
                </Link>
            </div>

    );
};

export default NavButton;
