import { motion as m } from "framer-motion";
import React from "react";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiTerraform,
  SiTypescript
} from "react-icons/si";
import styles from "./MySkills.module.scss";

interface MySkillsProps {}

export const MySkills: React.FC<MySkillsProps> = ({}) => {
  return (
    <section className={styles.mySkillsWrapper}>
      <m.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className={styles.mySkillsHeader}>
          <div>
            <h2>Tech Stack</h2>
            <p>
              Below you can see a list of technolgies which are my &apos;bread
              and butter&apos;.
            </p>
          </div>
        </div>
        <div className={styles.mySkillsContainer}>
          <ul className={styles.skillsFlexWrapper}>
            <li>
              <div>
                <SiGit color="#f14e32" size={40} />
              </div>
              <p>Git</p>
            </li>
            <div>
              <li>
                <div>
                  <SiAmazonaws color="#FF9900" size={45} />
                </div>
                <p>AWS</p>
              </li>
              <li>
                <div>
                <SiMicrosoftazure color="008AD7" size={40} />
              </div>
              <p>Azure</p>
              </li>
            </div>
            <div>
              <li>
                <div>
                  <SiDocker color="1D63ED" size={40} />
                </div>
                <p>Docker</p>
              </li>
              <li>
                <div>
           <SiKubernetes color="326CE5" size={40} />

                </div>
                <p>Kubernetes</p>
              </li>
              <li>
                <div>
                  <SiTerraform color="7B42BC" size={40} />
                </div>
                <p>Terraform</p>
              </li>
            </div>
            <div>
              <li>
                <div>
                  <SiNextdotjs color="fff" size={40} />
                </div>
                <p>Next.js</p>
              </li>
              <li>
                <div>
                  <SiReact color="61DBFB" size={40} />
                </div>
                <p>React.js</p>
              </li>
              <li>
                <div>
                  <SiTypescript color="007acc" size={40} />
                </div>
                <p>TypeScript</p>
              </li>
              <li>
                <div>
                  <SiJavascript color="f7df1e" size={40} />
                </div>
                <p>JavaScript</p>
              </li>
            </div>
            <div>
              <li>
                <div>
                  <SiMysql color="00758F" size={40} />
                </div>
                <p>SQL</p>
              </li>
              <li>
                <div>
                  <SiMongodb color="#4DB33D" size={40} />
                </div>
                <p>MongoDB</p>
              </li>
              <li>
                <div>
                  <SiRedis color="#D82C20" size={40} />
                </div>
                <p>Redis</p>
              </li>
            </div>
            <div>
              <li>
                <div>
                  <SiNodedotjs color="3C873A" size={40} />
                </div>
                <p>Node.js</p>
              </li>
              <li>
                <div>
                  <SiExpress color="#eee" size={40} />
                </div>
                <p>Express.js</p>
              </li>
            </div>
            <li>
              <div>
                  <SiRabbitmq color="f60" size={40} />
                </div>
                <p>RabbitMQ</p>
            </li>
          </ul>
        </div>
        <div className={styles.mySkillsContainerMobile}>
          <ul className={styles.skillsFlexWrapperMobile}>
            <li>
              <div>
                <SiJavascript color="f7df1e" size={40} />
              </div>
              <p>JavaScript</p>
            </li>
            <li>
              <div>
                <SiTypescript color="007acc" size={40} />
              </div>
              <p>TypeScript</p>
            </li>
            <li>
              <div>
                <SiReact color="61DBFB" size={40} />
              </div>
              <p>React.js</p>
            </li>
            <li>
              <div>
                <SiNextdotjs color="fff" size={40} />
              </div>
              <p>Next.js</p>
            </li>
                <li>
              <div>
                <SiNodedotjs color="3C873A" size={40} />
              </div>
              <p>Node.js</p>
            </li>
               <li>
              <div>
                <SiExpress color="#eee" size={40} />
              </div>
              <p>Express.js</p>
            </li>
        <li>
                <div>
                  <SiAmazonaws color="#FF9900" size={45} />
                </div>
                <p>AWS</p>
              </li>
              <li>
                <div>
                <SiMicrosoftazure color="008AD7" size={40} />
              </div>
              <p>Azure</p>
              </li>
                 <li>
                <div>
                  <SiDocker color="1D63ED" size={40} />
                </div>
                <p>Docker</p>
              </li>
           <li>
                <div>
           <SiKubernetes color="326CE5" size={40} />

                </div>
                <p>Kubernetes</p>
              </li>
              <li>
                <div>
                  <SiTerraform color="7B42BC" size={40} />
                </div>
                <p>Terraform</p>
              </li>
            <li>
              <div>
                <SiMysql color="00758F" size={40} />
              </div>
              <p>SQL</p>
            </li>
            <li>
              <div>
                <SiMongodb color="#4DB33D" size={40} />
              </div>
              <p>MongoDB</p>
            </li>
            <li>
              <div>
                <SiRedis color="#D82C20" size={40} />
              </div>
              <p>Redis</p>
            </li>
            <li>
              <div>
                <SiGit color="#f14e32" size={40} />
              </div>
              <p>Git</p>
            </li>
              <li>
              <div>
                  <SiRabbitmq color="f60" size={40} />
                </div>
                <p>RabbitMQ</p>
            </li>
          </ul>
        </div>
      </m.div>
    </section>
  );
};
