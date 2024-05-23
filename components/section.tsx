import EmblaCarousel from './carousel/EmblaCarousel';
import '../components/carousel/embla.css';

interface SectionProps {
    type: string;
    scope: string;
    title: string;
    description: string;
    role: string;
    stack: string;
    purpose: string;
    github: string;
    githubLink: string;
    fullDescription: string;
    slideRoot?: string;
    slideCount?: number;
    accentColor: string;
}

//Function to add line breaks to the fullDescription string at \n
function addLineBreak(str: string) {
    return str.split("\\n").map((substring, index) => {
        return (
            <p key={index} className="mb-4">
                {substring}
            </p>
        );
    });
}

//Function to generate slide paths for the EmblaCarousel component based on the slideRoot and slideCount
function generateSlidePaths(slideRoot: string, slideCount: number): string[] {
    const slidePaths: string[] = [];

    for (let i = 1; i <= slideCount; i++) {
        slidePaths.push(`/${slideRoot}-screen${i}.png`);
    }

    return slidePaths;
}

export default function Section({ type, scope, title, description, role, stack, purpose, github, githubLink, fullDescription, slideRoot, slideCount, accentColor }: SectionProps) {
    return (
        <div className="w-full bg-black max-w-6xl p-12 py-20 border-x border-b border-zinc-800 flex flex-col">
            <p className="text-zinc-500 text-xl mb-4">{type.toUpperCase()}&nbsp;&nbsp;•&nbsp;&nbsp;{scope.toUpperCase()}</p>
            <h2 style={{ borderLeft: `4px solid ${accentColor}` }} className="-ml-12 pl-10 text-5xl font-semibold text-zinc-400"><span style={{ color: accentColor }} className="font-bold">{title}.</span> {description}</h2>
            <EmblaCarousel slides={(slideRoot && slideCount) ? generateSlidePaths(slideRoot, slideCount) : ["placeholder.png"]} options={{}} />
            <div className="w-full flex flex-col md:flex-row gap-10">
                <div className="max-w-sm text-zinc-400 text-2xl flex flex-col gap-8">
                    <p><span style={{ color: accentColor }} className="font-bold">Role.</span> {role}</p>
                    <p><span style={{ color: accentColor }} className="font-bold">Stack.</span> {stack}</p>
                    <p><span style={{ color: accentColor }} className="font-bold">Purpose.</span> {purpose}</p>
                    <p><span style={{ color: accentColor }} className="font-bold">Github.</span> <a className="hover:underline" href={githubLink} target="_blank" rel="noopener noreferrer">{github}</a></p>
                </div>
                <div className="md:w-0 md:flex-1 text-zinc-400 text-lg leading-relaxed">{addLineBreak(fullDescription)}</div>
            </div>
        </div>
    );
}