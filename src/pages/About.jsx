import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <img 
            src="/images/about-hero.jpg" 
            
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1>Our Green Story</h1>
          <p>How a passion for plants grew into Plantify</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p>
              At Plantify, we believe everyone deserves to experience the joy and benefits of plants. 
              Our mission is to make plant ownership accessible, enjoyable, and rewarding for all.
            </p>
          </div>
          <div className={styles.missionImage}>
            <img 
              src="./images/mission.jpg" 
              alt="Plant care demonstration" 
              className={styles.contentImage}
            />
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className={styles.creator}>
        <div className={styles.container}>
          <div className={styles.creatorImage}>
            <img 
              src="./images/creator.jpg" 
              alt="Plantify creator" 
              className={styles.contentImage}
            />
          </div>
          <div className={styles.creatorContent}>
            <h2>Meet the Creator</h2>
            <p>
              Hi, I'm <strong><a href='#'>Moriarty</a></strong>, the plant enthusiast behind Plantify. What started as a personal 
              hobby quickly grew into a passion project. I created Plantify to share my love of 
              plants with others and help beginners start their plant journey.
            </p>
            <p>
              As a self-taught plant parent, I understand the challenges of getting started. 
              That's why I've curated this collection of resources and plants to make your 
              experience as smooth and enjoyable as possible.
            </p>
            <div className={styles.personalLinks}>
              <a href="[Your Portfolio]" target="_blank" rel="noopener noreferrer">My Portfolio</a>
              <a href="[Your GitHub]" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="[Your LinkedIn]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className={styles.projectInfo}>
        <h2>About This Project</h2>
        <div className={styles.infoCards}>
          <div className={styles.card}>
            <h3>Purpose</h3>
            <p>
              Plantify was created as a personal project to combine my love for plants with my passion 
              for web development. It showcases modern React practices and responsive design.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Technology</h3>
            <p>
              Built with React.js, Next.js, and CSS Modules. Features responsive design, 
              interactive elements, and modern UI/UX principles.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Source Code</h3>
            <p>
              The project is open source and available on GitHub. Feel free to explore, 
              contribute, or use it as inspiration for your own projects.
            </p>
            <a 
              href="[Your GitHub Repo]" 
              className={styles.githubLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;