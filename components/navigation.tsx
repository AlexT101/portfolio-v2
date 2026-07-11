"use client";

import { useState, useEffect } from "react";
import NavDot from "@/components/navDot";
import { TooltipProvider } from "@/components/ui/tooltip";

interface NavigationProps {
    projects: {
        root: string;
        title: string;
        accentColor: string;
        altTooltip?: string;
    }[];
}

export default function Navigation({ projects }: NavigationProps) {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const sections = projects
            .map(({ root }) => document.getElementById(root))
            .filter((el): el is HTMLElement => el !== null);

        // Fire when a section crosses the vertical center of the viewport; the
        // section occupying the center is the active one. Off-main-thread, so
        // no getBoundingClientRect layout thrash on every scroll event.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveProject(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [projects]);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 1360);
            setShowTooltip(window.innerWidth > 1460);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
        }
    };

    return (
        <TooltipProvider delayDuration={0}>
            <div
                className={`fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-1 z-50 transition-opacity duration-200  ${isVisible ? "block" : "hidden"}`}
            >
                {isVisible &&
                    projects.map(({ root, title, accentColor, altTooltip }) => (
                        <NavDot
                            key={root}
                            root={root}
                            title={altTooltip || title}
                            accentColor={accentColor}
                            isActive={root === activeProject}
                            scrollToSection={scrollToSection}
                            showTooltip={showTooltip}
                        />
                    ))}
            </div>
        </TooltipProvider>
    );
}
