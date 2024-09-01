import React from "react";

const Projects = ({ projectName }) => {
  const projects = [
    {
      name: "Chit Chat",
      repoUrl: "https://github.com/Ali-Raza764/chitchat-frontend",
      technologiesUsed: "Next.js 14, Upstash Redis, Pusher, zustand",
      description:
        "Chit Chat is a raltime chatting platform. It allows user to add friends send requests and deny them in realtime. Also users can do realtime chatting. More Work has to be done on this project like improving the initial data fetching and improving the zustand based global chatStore.",
      liveUrl: "https://chitchat-frontend-brown.vercel.app",
    },
    {
      name: "Baze",
      repoUrl: "https://github.com/Ali-Raza764/baze",
      technologiesUsed: "Next.js 14 and Jiosaavn APi",
      description:
        "Baze is a music streaming and downloading service currently in development. The development is paused becaue of the api development",
      liveUrl: "https://baze-rho.vercel.app",
    },
    {
      name: "Shopfinity",
      repoUrl: "https://github.com/Ali-Raza764/baze",
      technologiesUsed: "Next.js 14, MongoDb, Stripe, Auth.js, Tailwind Css",
      description:
        "Shopfinity is a full stack online shopping platform with user and admin functionalities it handles payment using stripe webhooks and has features like add to favourites and add to cart. Shopfinity uses auth.js for authentication and mongoDb for Data storage. Still parts of the app are to be developed.",
      liveUrl: "https://ecommerce-shopfinity.vercel.app",
    },
    {
      name: "Pendrive",
      repoUrl: "https://github.com/Ali-Raza764/pendrive-google-drive-clone",
      technologiesUsed:
        "Next.js 14, Firebase Firestore, FireBase Storage, Clerk.js, Zustand, Tailwind Css",
      description:
        "Pendrive is a google drive clone that allows user to upload, star, trash, view, download and delete the files in their cloud storage. Pendrive is the first ever next.js application that I have made.",
      liveUrl: "https://pendrive.vercel.app",
    },
    {
      name: "Chess Pro",
      repoUrl: "https://github.com/Ali-Raza764/chess-pro",
      technologiesUsed:
        "Next.js 14, Socket.io, chessboardjsx, chess.js, Custom Node.js Game Server, Tailwind Css, Custom Chess Puzzles Api",
      description:
        "Chess Pro is attempt to create a chess.com and lichess.org clone using react.js and node.js servers running on top of web socket protocols. Currently ChessPro Offers Matching, game Link and Puzzles functionality with Authentication and user specific Functionalities to be developed",
      liveUrl: "https://pendrive.vercel.app",
    },
    {
      name: "Terminal PortFolio",
      repoUrl: "https://github.com/Ali-Raza764/terminal-portfolio",
      technologiesUsed: "React.js",
      description:
        "Terminal Portfolio is a fun project to create a terminal looking portfolio with using bare react.js and react-icons used with tailwind css",
      liveUrl: "https://ali-terminal-potfolio.netlify.app",
    },
    {
      name: "DownloadIt",
      repoUrl: "https://github.com/Ali-Raza764/downloadit",
      technologiesUsed: "Next.js, JioSaavn Api, js Downloader",
      description:
        "DownloadIt is a simple website to search and download songs, it is made on top of the jiosaavn api.",
      liveUrl: "https://downloadit-rho.vercel.app",
    },
    {
      name: "DownloadYt",
      repoUrl: "https://github.com/Ali-Raza764/downloadyt",
      technologiesUsed: "Next.js, YoutubeMediaApi",
      description: "A Simple Webiste to download youtube videos",
      liveUrl: "https://downloadyt-two.vercel.app/",
    },
  ];

  let ProjectData = null;
  projects.forEach((project) => {
    console.log(project.name, projectName);

    if (project.name.toLocaleLowerCase() === projectName) {
      ProjectData = project;
    }
  });

  if (projectName && ProjectData) {
    return (
      <div className="flex flex-col gap-3">
        <div>
          <strong className="text-yellow-500">Name</strong>: {ProjectData.name}
        </div>
        <div>
          <strong className="text-yellow-500">Live Url</strong>:{" "}
          <a href={ProjectData.liveUrl} className="text-green-500">
            {ProjectData.liveUrl}
          </a>
        </div>
        <div>
          <strong className="text-yellow-500">Repo Url</strong>:{" "}
          <a href={ProjectData.repoUrl} className="text-green-500">
            {ProjectData.repoUrl}
          </a>
        </div>
        <div>
          <strong className="text-yellow-500">Technoligies Used</strong>:{" "}
          {ProjectData.technologiesUsed}
        </div>
        <div>
          <strong className="text-yellow-500">Description</strong>:{" "}
          {ProjectData.description}
        </div>
      </div>
    );
  }
  return (
    <div>
      {projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ))}
      <p className="text-lg">
        Use <strong className="text-green-500">Command</strong>: projects{" "}
        <strong className="text-yellow-500">project-name</strong> for more
        details
      </p>
    </div>
  );
};

export default Projects;
