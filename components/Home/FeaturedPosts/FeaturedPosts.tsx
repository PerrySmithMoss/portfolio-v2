import React from 'react'
import { SeeAll } from '../../Button/SeeAll/SeeAll';
import styles from "./FeaturedPosts.module.css"

interface FeaturedPostsProps {

}

export const FeaturedPosts: React.FC<FeaturedPostsProps> = ({}) => {
        return (
            <section className={styles.wrapper}>
            <div className={styles.header}>
              <div>
                <h2>Featured Projects</h2>
              </div>
              <div className={styles.arrowContainer}>
                <SeeAll colour="#00FFFF" buttonText="View more" />
              </div>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsGrid}>
                  {/* {featuredProjects.map((project: IProject) => (
                    <ProjectCard project={project}/>
                  ))} */}
                </div>
            </div>
          </section>
        );
}