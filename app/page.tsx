import Footer from "@/components/footer";
import Header from "@/components/header";
import Section from "@/components/section";
import ReturnButton from "@/components/returnButton";
import { projects } from "@/lib/projects";
import Navigation from "@/components/navigation";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Georgia Institute of Technology",
    },
    knowsAbout: [
        "Frontend Development",
        "Software Engineering",
        "React",
        "TypeScript",
        "Next.js",
        "Full-Stack Development",
        "UI/UX Design",
    ],
    sameAs: ["https://github.com/alext101", "https://www.linkedin.com/in/alext101/"],
};

export default function Home() {
    return (
        <main className="w-full bg-black flex flex-col items-center">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <Header />

            {projects.map((project, index) => (
                <Section key={project.root} {...project} priority={index === 0} />
            ))}

            <Footer />
            <Navigation projects={projects} />
            <ReturnButton />
        </main>
    );
}
