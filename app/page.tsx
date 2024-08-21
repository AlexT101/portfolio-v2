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
        root="musicharts"
        slideCount={11}
        role="Full-Stack Developer"
        stack="Next.js, React, Typescript, HTML, Tailwind, CSS, Supabase, Spotify Web API, Shadcn UI"
        purpose="Personal Project"
        fullDescription="As someone who loves listening to music, I built Musicharts to let Spotify users gain deep insights into their listening habits. After uploading their Extended Streaming History, a .json data dump provided by Spotify, users can see a comprehensive analysis of their listening patterns in a dashboard overview, or opt instead to look at detailed statistics and charts for any chosen track, album, or artist. Users can even go back in time using the recap feature to see their past listening sessions. \nMusicharts leverages the Spotify Web API to fetch up-to-date metadata on listened music, which is stored locally for fast access. The API also enables a music discovery page that provides tailor-made recommendations based on user-chosen personal preferences and music favorites."
        accentColor="#6366f1"
      />

<Section
        type="Team Project"
        scope="Frontend"
        title="GTXR"
        description="Landing page for the Georgia Tech Extended Reality (GTXR) Club."
        root="gtxr"
        slideCount={6}
        role="Frontend Developer"
        stack="Next.js, React, Typescript, HTML, Tailwind, CSS"
        purpose="GTXR Club"
        site="gtxr.club"
        siteLink="https://gtxr.club"
        fullDescription="I worked with one other person to build the website for the Georgia Tech Extended Reality Club. My role was to design and develop the landing page - I wanted the page to feel very modern and fluid to fit with the club's focus on the latest XR technologies. I added several subtle gradients and animations to bring the page together."
        accentColor="#ae7ee0"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="ImmerseGT"
        description="Online event platform for the 2024 ImmerseGT Hackathon."
        root="immersegt"
        slideCount={9}
        role="Full-Stack Developer, Designer"
        stack="Next.js, React, Typescript, HTML, CSS, Supabase, Mantine, Redux"
        purpose="GTXR Club"
        site="immersegt.io"
        siteLink="https://immersegt.io"
        fullDescription="I designed and led the development of a website to help the GTXR club run the ImmerseGT hackathon. The platform has a landing page with details about the event as well as a registration portal, which facilitated over 200 signups. The website also had partial functionality for a team formation tool which would help organize the team finding process during the hackathon, by letting users create teams and search for open teams to join. \nUnfortunately the hackathon could not be held during the 2024 hackathon season due to logistics issues, but with a planned return next year, the platform will likely be fully finished and ready for extended use soon."
        accentColor="#CC5DE8"
      />

      <Section
        type="Team Project"
        scope="Frontend"
        title="GreenJournal"
        description="Carbon footprint dashboard based on data from the EPA."
        root="greenjournal"
        slideCount={3}
        role="Frontend Developer, Designer"
        stack="Next.js, React, Typescript, HTML, Tailwind, CSS, NextUI"
        purpose="Hackathon"
        github="/green-journal"
        githubLink="https://github.com/barrosodavid/greenjournal"
        fullDescription="I worked with 3 people to create GreenJournal for a 36 hour hackathon, HackGT X, held at Georgia Tech. Our goal was to devise an easy, visual, and interactive way for people to track their impact on the environment through their carbon footprint. We did this with procedures and data we found on the Environmental Protection Agency website, which we used to calculate each of the top factors that affect one’s carbon footprint. \nI was responsible for designing the initial wireframe layout and working on various parts of the user interface. I also handled user input by creating input fields using the NextUI component library and writing the algorithms necessary to calculate the carbon footprint. One of our team members designed the globe in Blender and used Three.js to make it visually responsive to the collected user data as we identified their carbon footprint as either better or worse than average human behaviors."
        accentColor="#18C964"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="Roam"
        description="Log your travel experiences and plan your future adventures on a 3D globe."
        root="roam"
        slideCount={9}
        role="Full-Stack Developer"
        stack="React, Javascript, HTML, CSS, Google Maps Geocoding API, Python, MongoDB"
        purpose="Web Dev Club"
        github="/roam"
        githubLink="https://github.com/michelle692/roam"
        fullDescription="I worked with 5 people to create Roam as part of a semester-long project team. Our goal was to create an app that could be used for logging travel in a fun, interactive way. After a user types the location they want to add, we use the Google Maps Geocoding API to search for all of the likely location matches, and the one the user selects gets added to a 3D globe they can spin around and click on to see more details about the places they’ve been. \nA team member created a Figma design of the app, which I used to implement several frontend components (buttons, input fields, modals) and layouts for the app. I also wrote the frontend logic for toggling between modals, authentication, searching for/adding locations, editing notes, and maintaining persistent data using local storage and calls to the backend. For the backend, I helped to write calls for CRUD functionality for the travel history and wishlist documents."
        accentColor="#a78bfa"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="MarketMatch"
        description="Swipe on stocks to build your stock portfolio, based on Tinder."
        root="marketmatch"
        slideCount={6}
        role="Frontend Developer, Designer"
        stack="Next.js, React, Typescript, HTML, CSS, Mantine, Zustand, IEX Cloud, Python, OpenAI API, MongoDB"
        purpose="Hackathon"
        github="/market-match"
        githubLink="https://github.com/alext101/market-match"
        fullDescription="I worked with 3 people to create MarketMatch for a 36 hour hackathon, Hacklytics 2024, at Georgia Tech. Our goal was to build a beginner-friendly website to introduce people to the stock market. Our website lets users input preferences about the types of stocks they would like to see. We then provide them one recommendation at a time (similar to a Tinder profile) with detailed information about the stock including a description, graphs, detailed data, sentiment analysis based on the news, and a chatbot integration if users have any questions. \nUsers can swipe left (to reject) or right (to accept) on each stock recommendation. All of the accepted stocks are added to their tailored portfolio, and their swipe choice is sent to the backend to tailor future recommendations to their preferences using machine learning. \nMy teammates were responsible for building the backend and recommendation algorithms, and I was responsible for developing the frontend interface."
        accentColor="#3B5BDB"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="Wrapped"
        description="View summaries of your music listening, based on Spotify Wrapped."
        root="wrapped"
        slideCount={1}
        role="Developer"
        stack="Java, Android Studio, Firebase"
        purpose="Class Project"
        github="/wrapped"
        githubLink="https://github.com/alext101/wrapped"
        fullDescription="I worked with 5 people to create Wrapped for the class CS 2340: Objects and Design at Georgia Tech. Our Android app was designed as an alternative to Spotify Wrapped, which is only available once per year and lets Spotify users see various “year-in-review” statistics displayed in creative ways. \nOur users can choose a time range across their listening history, and we generate several slides (like an Instagram story) to show various aspects of their listening, such as their top tracks and artists. \nWe get this data from the Spotify Web API, and we use Firebase to store user data and handle authentication so the generated information is available from any device they log in to. We also integrate with the Spotify mobile player to play snippets of the user’s favorite music as they scroll through the slides."
        accentColor="#bf3f5c"
      />

      <Section
        type="Team Project"
        scope="Full Stack"
        title="College Scheduler"
        description="Tracker to help college students manage their schedules."
        root="scheduler"
        slideCount={1}
        role="Developer"
        stack="Java, Android Studio"
        purpose="Class Project"
        github="/college-scheduler"
        githubLink="https://github.com/alext101/college-scheduler"
        fullDescription="I worked with 2 people to create the College Scheduler Android app for the CS2340 class. The app lets students add their classes, assignments, exams, and upcoming tasks to a visual list view. There is also functionality for sorting and filtering items. This project was a practice assignment, so there is no backend functionality for user accounts or storing their inputted data."
        accentColor="#BDB2FF"
      />

      <Section
        type="Team Project"
        scope="Design"
        title="Skru"
        description="Web-based, paletted pixel art editor."
        root="skru"
        slideCount={3}
        role="Designer"
        stack="Figma"
        purpose="Web Dev Club"
        fullDescription="I designed 3 screens for Skru, an online pixel editor that can be used from the browser. I designed planned features for arranging layers, choosing color palettes, transforming the canvas, and adding shapes/text to the pixel art. I based my designs on the Figma layout due to their similar purposes, since I wanted Skru’s interface to feel intuitive for designers who have used these types of programs before. \nSkru was a team project with the goal of creating a modern replacement for Usenti, a desktop bitmap editor. Although development of Skru was never finished, designing the visual interface of the application was my first experience with Figma and helped me learn a lot about how to use it."
        accentColor="#FFC000"
      />

      <Section
        type="Practice"
        scope="Design"
        title="Practice"
        description="UI/UX mockup mini projects."
        root="practice"
        slideCount={3}
        role="Designer"
        stack="Adobe Illustrator"
        purpose="Practice"
        fullDescription="Lifts (image 1) is a UI/UX mockup for a mobile app that lets bodybuilders and powerlifters track their fitness journey. Users can start a workout and log individual lifts, such as bench press or deadlift, to track their numbers and progress over time. \nAgent (image 2) is a UI/UX mockup for an informational webpage for the game Valorant. I am not affiliated with Riot/Valorant, but I wanted to practice working with their design style of utilitarian, yet clean and appealing, graphics. I used official Valorant assets, as well their current website’s color scheme and similar fonts, to experiment with their design style. \nLink in Bio (image 3) was an experiment to design a link in bio website for myself to share important links using HTML/CSS."
        accentColor="#ffffff"
      />

      <Footer />
      <ReturnButton />
    </main>
  );
}
