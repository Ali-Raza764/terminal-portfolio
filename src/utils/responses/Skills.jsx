import { IconBase } from "react-icons";
import {
  BiLogo99Designs,
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoGoogle,
  BiLogoGoogleCloud,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoUnsplash,
  BiSolidPurchaseTag,
} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiBabel, SiNumpy, SiPusher, SiShadcnui, SiVite } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <BiLogoJavascript size={35} /> },
    { name: "C++", icon: <BiLogoCPlusPlus size={35} /> },
    { name: "Python", icon: <BiLogoPython size={35} /> },
    { name: "Git", icon: <BiLogoGit size={35} /> },
    { name: "HTML5", icon: <BiLogoHtml5 size={35} /> },
    { name: "CSS3", icon: <BiLogoCss3 size={35} /> },
    { name: "React", icon: <BiLogoReact size={35} /> },
    { name: "Next.js", icon: <RiNextjsFill size={35} /> },
    { name: "Tailwind", icon: <BiLogoTailwindCss size={35} /> },
    { name: "Vite", icon: <SiVite size={35} /> },
    { name: "Node.js", icon: <BiLogoNodejs size={35} /> },
    { name: "Firebase", icon: <BiLogoFirebase size={35} /> },
    { name: "Figma", icon: <BiLogoFigma size={35} /> },
    { name: "Google Cloud", icon: <BiLogoGoogleCloud size={35} /> },
    { name: "MongoDB", icon: <BiLogoMongodb size={35} /> },
    { name: "Redis", icon: <DiRedis size={35} /> },
    { name: "Pusher", icon: <SiPusher size={35} /> },
    { name: "shadcn", icon: <SiShadcnui size={35} /> },
    { name: "Babel", icon: <SiBabel size={35} /> },
    { name: "Numpy", icon: <SiNumpy size={35} /> },
  ];
  return (
    <div className="flex items-center">
      {skills.map((skill) => (
        <div key={skill.name}>{skill.icon}</div>
      ))}
    </div>
  );
};

export default Skills;
