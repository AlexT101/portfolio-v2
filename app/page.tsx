import Header from '../components/header';
import Section from '../components/section';

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col items-center">
      <Header />

      <Section
        type="Personal Project"
        scope="Full Stack"
        title="Musicharts"
        description="Tune into your favorite music with interactive charts and detailed stats, built using Spotify streaming data."
        slideRoot="musicharts"
        slideCount={11}
        role="Full-Stack Developer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase"
        purpose="Personal Project"
        github="/musicharts"
        githubLink="https://github.com/AlexT101/musicharts"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#6366f1"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="Roam"
        description="Log your travel experiences and plan your future adventures on an interactive globe."
        slideRoot="roam"
        slideCount={9}
        role="Full-Stack Developer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase"
        purpose="Class Project"
        github="/musicharts"
        githubLink="https://github.com/AlexT101/musicharts"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#a855f7"
      />

      <Section
        type="Project Type"
        scope="Project Scope"
        title="Title"
        description="Project description here that briefly explains what the project is about."
        role="Developer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase"
        purpose="Project Purpose"
        github="/github"
        githubLink="https://github.com/AlexT101/"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#ffffff"
      />
    </main>
  );
}
