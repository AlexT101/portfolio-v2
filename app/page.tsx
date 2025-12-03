import Footer from '@/components/footer';
import Header from '@/components/header';
import Section from '@/components/section';
import ReturnButton from '@/components/returnButton';
import { projects } from "@/lib/projects";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col items-center">
      <Header />

      {projects.map((project) => (
        <Section key={project.root} {...project} />
      ))}

      <Footer />
      <Navigation projects={projects} />
      <ReturnButton />
    </main>
  );
}
