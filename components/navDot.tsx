import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

interface NavDotProps {
    root: string;
    title: string;
    accentColor: string;
    isActive: boolean;
    scrollToSection: (id: string) => void;
    showTooltip?: boolean;
}

export default function NavDot({ root, title, accentColor, isActive, scrollToSection, showTooltip }: NavDotProps) {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip open={showTooltip && (isActive || undefined)} onOpenChange={(open) => !isActive && open}>
                <TooltipTrigger
                    className="group p-2"
                    onClick={() => scrollToSection(root)}
                >
                    <div
                        className={`w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-125 group-hover:brightness-125 cursor-pointer ${isActive && "scale-125"}`}
                        style={{
                            backgroundColor: isActive ? accentColor : "#3F3F47"
                        }}
                    />
                </TooltipTrigger>
                <TooltipContent side="right">{title}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
