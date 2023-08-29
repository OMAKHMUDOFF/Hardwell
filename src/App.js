import { Nav } from "./components/Nav";
import { Head } from "./components/Head";
import { Serv } from "./components/Service";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Proj } from "./components/Proj";
import { Analyze } from "./components/Analyze";
import { Hww } from "./components/How";
import { Team } from "./components/Team";
import { Testi } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { Latest } from "./components/Latest";

import athlet from "./img/icons/athletics.png";
import archer from "./img/icons/archery.png";
import money from "./img/icons/money.png";

import member1 from "./img/members/member1.png";
import member2 from "./img/members/member2.png";
import member3 from "./img/members/member3.png";
import member4 from "./img/members/member4.png";

import profile from "./img/testimonials/profile.png";

import client1 from "./img/clients/client1.png";
import client2 from "./img/clients/client2.png";
import client3 from "./img/clients/client3.png";
import client4 from "./img/clients/client4.png";
import client5 from "./img/clients/client5.png";

import latest1 from "./img/latest/latest.png";
import latest2 from "./img/latest/latest2.png";
import latest3 from "./img/latest/latest3.png";
import { Footer } from "./components/Footer";

function App() {
  let servData = [
      {
        icon: athlet,
        title: "Product Management",
        about:
          "Stay on top of your task lists and stay in touch with what's happening",
      },
      {
        icon: archer,
        title: "Design & Vreatives",
        about:
          "Stay on top of your task lists and stay in touch with what's happening",
      },
      {
        icon: money,
        title: "Markething & Commuication",
        about:
          "Stay on top of your task lists and stay in touch with what's happening",
      },
    ],
    projData = [
      {
        num: "4.200%",
        title: "Revenue",
      },
      {
        num: "73+",
        title: "Projects",
      },
      {
        num: "99.5+",
        title: "Uptime",
      },
    ],
    teamData = [
      {
        photo: member1,
        name: "Bernarr Dominik",
        prof: "Founder",
      },
      {
        photo: member2,
        name: "Fabiana Capmany",
        prof: "Account Manager",
      },
      {
        photo: member3,
        name: "Alicia Stanger",
        prof: "Designer",
      },
      {
        photo: member4,
        name: "Anton Brownstein",
        prof: "Developer",
      },
    ],
    testData = [
      {
        about:
          "Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        profile: profile,
        name: "Billy Root",
        prof: "torest",
      },
      {
        about:
          "Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        profile: profile,
        name: "Billy Root",
        prof: "torest",
      },
      {
        about:
          "Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        profile: profile,
        name: "Billy Root",
        prof: "torest",
      },
    ],
    clientData = [
      {
        logo: client1,
      },
      {
        logo: client2,
      },
      {
        logo: client3,
      },
      {
        logo: client4,
      },
      {
        logo: client5,
      },
    ],
    lastData = [
      {
        img: latest1,
        subtitle: "Build prototypes with thousands of components.",
        desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
        read: "Ream more",
      },
      {
        img: latest2,
        subtitle: "Build prototypes with thousands of components.",
        desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
        read: "Ream more",
      },
      {
        img: latest3,
        subtitle: "Build prototypes with thousands of components.",
        desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
        read: "Ream more",
      },
    ];
  return (
    <>
      <div className="container">
        <Nav />
        <Head />
        <Serv propServ={servData} />
        <About />
        <Works />
        <Proj propProj={projData} />
        <Analyze />
        <Hww />
        <Team propTeam={teamData} />
        <Testi propTest={testData} />
        <Clients propClient={clientData} />
        <Latest propLatest={lastData} />
        <Footer />
      </div>
    </>
  );
}

export default App;
