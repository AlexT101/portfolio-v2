import Footer from '@/components/footer';
import Header from '@/components/header';
import Section from '@/components/section';
import ReturnButton from '@/components/return-button';

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col items-center">
      <Header />

      <Section
        type="Personal Project"
        scope="Full Stack"
        title="Musicharts"
        description="Tune into your favorite music with interactive charts and detailed stats."
        slideRoot="musicharts"
        slideCount={11}
        role="Full-Stack Developer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase"
        purpose="Personal Project"
        github="/musicharts"
        githubLink="https://github.com/alext101/musicharts"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#6366f1"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="ImmerseGT"
        description="Online event platform for the 2024 ImmerseGT Hackathon."
        slideRoot="immersegt"
        slideCount={1}
        role="Full-Stack Developer, Designer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase"
        purpose="GTXR Club"
        github="/immersegt"
        githubLink="https://github.com/immersegt/immersegt"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#CC5DE8"
      />

      <Section
        type="Team Project"
        scope="Frontend"
        title="GreenJournal"
        description="Carbon footprint dashboard based on data from the EPA."
        slideRoot="greenjournal"
        slideCount={2}
        role="Frontend Developer, Designer"
        stack="Next.js, React, Typescript, HTML, CSS"
        purpose="Hackathon"
        github="/green-journal"
        githubLink="https://github.com/barrosodavid/greenjournal"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#18C964"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="Roam"
        description="Log your travel experiences and plan your future adventures on a 3D globe."
        slideRoot="roam"
        slideCount={9}
        role="Full-Stack Developer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase"
        purpose="Web Dev Club"
        github="/musicharts"
        githubLink="https://github.com/alext101/musicharts"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#a78bfa"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="MarketMatch"
        description="Swipe on stocks to build your stock portfolio, based on Tinder."
        slideRoot="marketmatch"
        slideCount={3}
        role="Frontend Developer, Designer"
        stack="Next.js, React, Typescript, HTML, CSS"
        purpose="Hackathon"
        github="/market-match"
        githubLink="https://github.com/alext101/market-match"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#3B5BDB"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="Wrapped"
        description="View summaries of your music listening, based on Spotify Wrapped."
        slideRoot="wrapped"
        slideCount={1}
        role="Developer"
        stack="Java, Android Studio, Firebase"
        purpose="Class Project"
        github="/wrapped"
        githubLink="https://github.com/alext101/wrapped"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#bf3f5c"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="College Scheduler"
        description="Tracker to help college students manage their schedules."
        slideRoot="scheduler"
        slideCount={1}
        role="Developer"
        stack="Java, Android Studio"
        purpose="Class Project"
        github="/college-scheduler"
        githubLink="https://github.com/alext101/college-scheduler"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#BDB2FF"
      />

      <Section
        type="Team Project"
        scope="Design"
        title="Skru"
        description="Web-based, paletted pixel art editor."
        slideRoot="skru"
        slideCount={3}
        role="Designer"
        stack="Figma"
        purpose="Web Dev Club"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#FFC000"
      />

<Section
        type="Practice"
        scope="Design"
        title="Practice"
        description="UI/UX mockup mini projects."
        slideRoot="practice"
        slideCount={2}
        role="Designer"
        stack="Adobe Illustrator"
        purpose="Practice"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        accentColor="#ffffff"
      />

      <Footer />
      <ReturnButton />
    </main>
  );
}
