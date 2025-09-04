import {
    mobile,
    web,
    javascript,
    cpp,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    autoserv,
    citipulse,
    threejs,
    music,
    weather
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Skills"
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  
  ];
  
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
       {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Postman",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "APIs",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "SQL",
      icon : docker
    },
    {
      name : "MYSQL",
      icon : "mysql"
    },
  ];

  const educations = [
    {
      title: "Masters of Computer Applications",
      company_name: "Centre for Development of Advanced Computing",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2024 - May 2026(Expected)",
      points: [
        "Coursework : Data Structures & Algorithms, Computer Networks, Object Oriented Programming, Database Management Systems, Software Engineering, Cloud Computing."
      ],
    },
    {
      title: "Bachelor of Science (B.Sc.) in Computer Science",
      company_name: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2020 - May 2023",
      points: [
        "Coursework: Programming Concepts, Introduction to Computers and Programming in C, Fundamentals of Data Structures, Object Oriented Programming, Database Management Systems, Operating System Concepts, ",
      ],
    },
    
  ];
  
  const projects = [

       {
      name: "CitiPulse",
      description:
        "CitiPulse is a civic-tech platform that empowers citizens to report local issues like potholes, garbage dumps, or broken streetlights using geo-tagged photos. The platform ensures transparency and accountability by allowing real-time status tracking and community voting. It features a clean UI built with React and Tailwind CSS, backed by a robust Node.js and MongoDB backend. CitiPulse aims to bridge the gap between citizens and government bodies for a smarter, more responsive city." ,
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
         {
          name: "MONGODB",
          color: "pink-text-gradient",
        },
      ],
      image: citipulse,
           web_link : "https://citipulse.netlify.app/",
      source_code_link: "https://github.com/aman3611/CitiPulse"
    },

      
    
      
    {
      name: "Online Auction System (BIDBAZAAR)",
      description:
        "Empowering roadside vendors & NGOs a scalable digital marketplace Real-time auction updates & seamless vendor/NGO onboarding User-friendly dashboard for managing auctions and accounts",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
         {
          name: "MONGODB",
          color: "pink-text-gradient",
        },
      ],
      image: autoserv,
      source_code_link: "https://github.com/aman3611/BidBazaar",
    },
    {
      name: "Music Streaming Application",
      description:
        "The Music Streaming Application is a platform that allows users to listen to their favorite songs, create playlists, and discover new music.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "Socket Programming",
          color: "pink-text-gradient",
        },
      ],
      image: music,
      source_code_link: "https://github.com/aman3611/MusicStreamingApp",
    },
    {
      name: "Weather-Tracker-JS",
      description:
        "A web application that provides real-time weather updates and forecasts for any location.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
         {
          name: "JavaScript",
          color: "green-text-gradient",
        },
         {
          name: "APIs Integration",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/aman3611/weather-tracker-js",
    },
  ];
  
  export { technologies, projects, educations };
