import Image from "next/image";
import styles from "./ProjectMockup.module.scss";

interface ProjectMockupProps {
  title: string;
  desktopImage: string;
  alt?: string;
  quality?: number;
}

export const ProjectMockup = ({
  title,
  desktopImage,
  alt,
  quality,
}: ProjectMockupProps) => (
  <div className={styles.laptop}>
    <Image
      src={desktopImage}
      quality={quality}
      alt={alt ?? `${title} desktop preview`}
      width={2560}
      height={1440}
      sizes="(max-width: 1100px) 90vw, 912px"
    />
  </div>
);
