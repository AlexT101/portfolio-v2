"use client";

import { useState, useEffect } from "react";
import NavDot from "@/components/navDot";

interface NavigationProps {
    projects: { root: string; title: string, accentColor: string, altTooltip?: string }[];
}

export default function Navigation({ projects }: NavigationProps) {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let lastPassedProject: string | null = null;

            projects.forEach(({ root }) => {
                const section = document.getElementById(root);
                if (section) {
                    const rect = section.getBoundingClientRect();

                    if (rect.top <= 50) {
                        lastPassedProject = root;
                    }
                }
            });

            setActiveProject(lastPassedProject);
        };

        const handleResize = () => {
            setIsVisible(window.innerWidth > 1360);
            setShowTooltip(window.innerWidth > 1460);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleScroll();
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [projects]);


    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
        }
    };

    return (
        <div
            className={`fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-1 z-50 transition-opacity duration-200  ${isVisible ? 'block' : 'hidden'}`}
        >
            {isVisible && projects.map(({ root, title, accentColor, altTooltip }) => (
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
    );
}
