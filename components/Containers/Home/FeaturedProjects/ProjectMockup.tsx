import Image from "next/image";
import styles from "./ProjectMockup.module.scss";

interface ProjectMockupProps {
  title: string;
  desktopImage: string;
}

export const ProjectMockup = ({
  title,
  desktopImage,
}: ProjectMockupProps) => (
  <div className={styles.laptop}>
    <Image
      src={desktopImage}
      alt={`${title} Today dashboard with the client review queue, a selected coaching decision and supporting evidence`}
      width={2560}
      height={1440}
      sizes="(max-width: 1100px) 90vw, 912px"
    />
  </div>
);
