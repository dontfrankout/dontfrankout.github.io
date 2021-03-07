import logo_ixm from "./img/logo_ixm.png";
import logo_bst from "./img/logo_bst.png";
import logo_ccbc from "./img/logo_ccbc.png";
import logo_cmu from "./img/logo_cmu.png";
import logo_tait from "./img/logo_tait.png";
import logo_trt from "./img/logo_trt.jpg";
import logo_towson from "./img/logo_towson.png";

import { Projects } from "./.ProjectData";

export const Resume = {
  profile: {
    name: "Frank Meyer",
    subtitle:
      "Project Manager | Business System Analyst | Manufacturing Engineer ",
    current: "Impact XM",
    location: "New York Metropolitan Area",
  },

  experience: [
    {
      name: "Impact XM",
      logo: logo_ixm,
      link: "https://impact-xm.com/",
      start: "",
      end: "",
      description: "Senior Project Manager | Empowering Brand Experiences",
      longitude: "",
      latitude: "",
    },

    {
      name: "Two River Theater",
      logo: logo_trt,
      link: "https://tworivertheater.org/",
      start: "",
      end: "",
      description: "Technical Director | Realizing the Vision",
      longitude: "",
      latitude: "",
    },

    {
      name: "TAIT",
      logo: logo_tait,
      link: "http://www.taittowers.com/",
      start: "",
      end: "",
      description: "Rigging Department | Doing The Impossible",
      longitude: "",
      latitude: "",
    },

    // {
    //   name: "Bay Street Theater",
    //   logo: logo_bst,
    //   link: "http://www.baystreet.org/",
    //   start: "",
    //   end: "",
    //   description: "",
    //   longitude: "",
    //   latitude: "",
    // },
  ],

  education: [
    {
      name: "Carnegie Mellon University",
      logo: logo_cmu,
      link: "https://www.cmu.edu/",
      start: "",
      end: "",
      description:
        "Master of Fine Arts | Production Management and Technical Direction",
      longitude: "",
      latitude: "",
    },

    {
      name: "Towson University",
      logo: logo_towson,
      link: "https://www.towson.edu/",
      start: "",
      end: "",
      description: "Bachelor of Science | Theater Design and Production",
      longitude: "",
      latitude: "",
    },

    {
      name: "Community College of Baltimore County",
      logo: logo_ccbc,
      link: "https://www.ccbcmd.edu/",
      start: "",
      end: "",
      description: "Associates | Computer Science",
      longitude: "",
      latitude: "",
    },
  ],

  social: [
    {
      name: "email",
      icon: {},
      link: "",
      color: "",
      aria: "send me a message",
    },
    {
      name: "linkedin",
      icon: {},
      link: "",
      color: "",
      aria: "find me on linked in",
    },
    {
      name: "github",
      icon: {},
      link: "",
      color: "",
      aria: "visit me on github",
    },
  ],

  languages: [
    { name: "C (embedded)", progress: 88, color: "#178600" },
    { name: "Javascript", progress: 90, color: "#f1e05a" },
    { name: "Python", progress: 70, color: "#3572A5" },
    { name: "VBA", progress: 75, color: "#867db1" },
  ],
  technical: [
    { name: "Custom Fabrication Solutions", progress: 95, color: "#630942" },
    {
      name: "Engineering and Mechanical Design",
      progress: 85,
      color: "#426309",
    },
    { name: "Mechanical Automation Design", progress: 75, color: "#09634b" },
    { name: "Entertainment and Arena Rigging", progress: 90, color: "#631909" },
  ],
  management: [
    { name: "Creative Event Management", progress: 95, color: "#ffa962" },
    {
      name: "Business Process and System Design",
      progress: 80,
      color: "#6287ff",
    },
    {
      name: "Manufacturing Process Engineering",
      progress: 75,
      color: "#ff6274",
    },
    { name: "Production Facility Planning", progress: 70, color: "#74ff62" },
  ],

  software: [
    { name: "Node.js", progress: 75, color: "#339933" },
    { name: "Vectorworks", progress: 95, color: "#00bcb4" },
    { name: "AutoCAD", progress: 75, color: "#dd2222" },
    { name: "Microsoft Office", progress: 99, color: "#00A4EF" },
  ],

  interests: [
    { name: "Local Beers and Foods", progress: 100, color: "#FFC72C" },
    { name: "Government and Public Policy", progress: 120, color: "#0a3161" },
    { name: "Robotics and Automation", progress: 110, color: "#BB29BB" },
    { name: "Advanced Military Technology", progress: 105, color: "#5e6638" },
  ],

  learning: [
    { name: "R Language", progress: 10, color: "#198CE7" },
    { name: "Azure Cognitive", progress: 40, color: "#008AD7" },
    { name: "Machine Learning", progress: 35, color: "#054907" },
    { name: "IoT Solutions", progress: 35, color: "#346d8a" },
  ],

  projects: Projects,
};
