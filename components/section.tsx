import EmblaCarousel from './carousel/EmblaCarousel';
import '../components/carousel/embla.css';

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

interface SectionProps {
    type: string;
    scope: string;
    title: string;
    description: string;
    role: string;
    stack: string;
    github?: string;
    githubLink?: string;
    site?: string;
    siteLink?: string;
    fullDescription: string;
    root?: string;
    slideCount?: number;
    accentColor: string;
}

export default function Section({ type, scope, title, description, role, stack, github, githubLink, site, siteLink, fullDescription, root, slideCount, accentColor }: SectionProps) {
    return (
        <section id={root} className="w-full bg-black max-w-6xl p-6 sm:p-12 py-12 sm:py-20 border-x border-b border-zinc-800 flex flex-col">
            <p className="text-zinc-400 text-md sm:text-lg md:text-xl mb-4 uppercase">
                {type} &nbsp;•&nbsp; {scope}
            </p>
            <h2 style={{ borderLeft: `4px solid ${accentColor}` }} className="-ml-6 sm:-ml-12 pl-4 sm:pl-10 text-3xl sm:text-5xl font-semibold text-zinc-400">
                <span style={{ color: accentColor }} className="font-bold">{title}. </span>
                <span className="block sm:inline">{description}</span>
            </h2>
            <EmblaCarousel slides={(root && slideCount) ? generateSlidePaths(root, slideCount) : ["placeholder.png"]} options={{}} />
            <div className="w-full flex flex-col md:flex-row gap-10">
                <div className="max-w-sm text-zinc-400 text-xl sm:text-2xl flex flex-col gap-8">
                    <p><span style={{ color: accentColor }} className="font-bold">Role:</span> {role}</p>
                    <p><span style={{ color: accentColor }} className="font-bold">Stack:</span> {stack}</p>
                    {(github && githubLink) &&
                        <p><span style={{ color: accentColor }} className="font-bold">Github:</span> <a className="hover:underline" href={githubLink} target="_blank" rel="noopener noreferrer">{github}</a></p>
                    }
                    {(site && siteLink) &&
                        <p><span style={{ color: accentColor }} className="font-bold">Site:</span> <a className="hover:underline" href={siteLink} target="_blank" rel="noopener noreferrer">{site}</a></p>
                    }
                </div>
                <div className="md:w-0 md:flex-1 text-zinc-400 text-base sm:text-lg leading-relaxed">{addLineBreak(fullDescription)}</div>
            </div>
        </section>
    );
}