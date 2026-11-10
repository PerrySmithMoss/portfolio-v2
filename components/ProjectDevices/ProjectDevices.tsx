import Image from "next/image";
import styles from "./ProjectDevices.module.scss";

interface ProjectDevicesProps {
  title: string;
  desktopImage: string;
  mobileImage: string;
  compact?: boolean;
}

export const ProjectDevices = ({
  title,
  desktopImage,
  mobileImage,
  compact = false,
}: ProjectDevicesProps) => (
  <div className={`${styles.composition} ${compact ? styles.compact : ""}`}>
    <div className={styles.laptop}>
      <div className={styles.desktopScreen}>
        <Image
          src={desktopImage}
          alt={`${title} web app showing bodybuilding markets, athlete odds and the bet slip`}
          width={1440}
          height={810}
          quality={95}
          sizes={compact ? "(max-width: 625px) 80vw, 30vw" : "(max-width: 970px) 80vw, 500px"}
        />
      </div>
      <div className={styles.laptopBase} aria-hidden="true" />
    </div>
    <div className={styles.phone}>
      <div className={styles.speaker} aria-hidden="true" />
      <div className={styles.mobileScreen}>
        <Image
          src={mobileImage}
          alt={`${title} React Native app showing the demo wallet and mobile navigation`}
          width={390}
          height={844}
          quality={95}
          sizes={compact ? "(max-width: 625px) 24vw, 10vw" : "(max-width: 970px) 24vw, 150px"}
        />
      </div>
      <div className={styles.homeIndicator} aria-hidden="true" />
    </div>
  </div>
);
