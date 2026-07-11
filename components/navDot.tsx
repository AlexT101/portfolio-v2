import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface NavDotProps {
    root: string;
    title: string;
    accentColor: string;
    isActive: boolean;
    scrollToSection: (id: string) => void;
    showTooltip?: boolean;
}

export default function NavDot({
    root,
    title,
    accentColor,
    isActive,
    scrollToSection,
    showTooltip,
}: NavDotProps) {
    const [hovered, setHovered] = useState(false);
    // Pin the active dot's label open on wide screens; otherwise the tooltip
    // follows hover/focus.
    const pinned = Boolean(isActive && showTooltip);

    return (
        <Tooltip open={pinned || hovered} onOpenChange={setHovered}>
            <TooltipTrigger className="group p-2" onClick={() => scrollToSection(root)}>
                <div
                    className={`w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-125 group-hover:brightness-125 cursor-pointer ${isActive && "scale-125"}`}
                    style={{
                        backgroundColor: isActive ? accentColor : "#3F3F47",
                    }}
                />
            </TooltipTrigger>
            <TooltipContent side="right">{title}</TooltipContent>
        </Tooltip>
    );
}
