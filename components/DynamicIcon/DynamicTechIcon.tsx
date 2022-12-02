import * as React from "react";
import {
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiGraphql,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiReacttable,
  SiSocketdotio
} from "react-icons/si";
import styles from  "./Icon.module.scss"

export type TechListType = keyof typeof techList;

export type DynamicTechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<"ul">;

export const DynamicTechIcons: React.FC<DynamicTechIconsProps> = ({ techs }) => {
  return (
    <ul className={styles.dynamicTechIconsContainer}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <li key={tech}>
            <current.icon />
          </li>
        );
      })}
    </ul>
  );
};

const techList = {
  react: {
    icon: SiReact,
    name: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  scss: {
    icon: SiSass,
    name: "SCSS",
  },
  javascript: {
    icon: SiJavascript,
    name: "JavaScript",
  },
  typescript: {
    icon: SiTypescript,
    name: "TypeScript",
  },
  nodejs: {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  firebase: {
    icon: SiFirebase,
    name: "Firebase",
  },
  mongodb: {
    icon: SiMongodb,
    name: "MongoDB",
  },
  redux: {
    icon: SiRedux,
    name: "Redux",
  },
  graphql: {
    icon: SiGraphql,
    name: "GraphQL",
  },
  mysql: {
    icon: SiMysql,
    name: "MySQL",
  },
  redis: {
    icon: SiRedis,
    name: "Redis",
  },
  reactQuery: {
    icon: SiReacttable,
    name: "React-Query",
  },
  socketIo: {
    icon: SiSocketdotio,
    name: "Socket.io",
  },
};
