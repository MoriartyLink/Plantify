import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.waveDivider}></div>
      
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <h3 className={styles.logo}>Plantify</h3>
          <p className={styles.tagline}>Where nature meets modern living</p>
          
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" aria-label="Instagram" className={styles.socialLink}>
              <svg className={styles.icon} viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58 0 4.85.07a6.3 6.3 0 0 1 2.1.4 3.7 3.7 0 0 1 1.37.9 3.7 3.7 0 0 1 .9 1.37 6.3 6.3 0 0 1 .4 2.1c.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85a6.3 6.3 0 0 1-.4 2.1 3.7 3.7 0 0 1-.9 1.37 3.7 3.7 0 0 1-1.37.9 6.3 6.3 0 0 1-2.1.4c-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07a6.3 6.3 0 0 1-2.1-.4 3.7 3.7 0 0 1-1.37-.9 3.7 3.7 0 0 1-.9-1.37 6.3 6.3 0 0 1-.4-2.1c-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85a6.3 6.3 0 0 1 .4-2.1 3.7 3.7 0 0 1 .9-1.37 3.7 3.7 0 0 1 1.37-.9 6.3 6.3 0 0 1 2.1-.4c1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.25 0-3.68.01-4.96.07a8.5 8.5 0 0 0-2.8.55 5.8 5.8 0 0 0-2.14 1.4 5.8 5.8 0 0 0-1.4 2.14 8.5 8.5 0 0 0-.55 2.8C.01 8.32 0 8.75 0 12s.01 3.68.07 4.96a8.5 8.5 0 0 0 .55 2.8 5.8 5.8 0 0 0 1.4 2.14 5.8 5.8 0 0 0 2.14 1.4 8.5 8.5 0 0 0 2.8.55c1.28.06 1.71.07 4.96.07s3.68-.01 4.96-.07a8.5 8.5 0 0 0 2.8-.55 5.8 5.8 0 0 0 2.14-1.4 5.8 5.8 0 0 0 1.4-2.14 8.5 8.5 0 0 0 .55-2.8c.06-1.28.07-1.71.07-4.96s-.01-3.68-.07-4.96a8.5 8.5 0 0 0-.55-2.8 5.8 5.8 0 0 0-1.4-2.14 5.8 5.8 0 0 0-2.14-1.4 8.5 8.5 0 0 0-2.8-.55C15.68.01 15.25 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.23a4.03 4.03 0 1 1 0-8.06 4.03 4.03 0 0 1 0 8.06zm6.44-10.3a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9z"/></svg>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className={styles.socialLink}>
              <svg className={styles.icon} viewBox="0 0 24 24"><path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24h11.5v-9.3H9.7v-3.6h3.12V8.4c0-3.1 1.9-4.8 4.66-4.8 1.32 0 2.46.1 2.8.15v3.25h-1.92c-1.5 0-1.8.72-1.8 1.77v2.32h3.6l-.47 3.6h-3.13V24h6.12c.72 0 1.32-.6 1.32-1.32V1.32C24 .6 23.4 0 22.68 0z"/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className={styles.socialLink}>
              <svg className={styles.icon} viewBox="0 0 24 24"><path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72 10 10 0 0 1-3.12 1.2 4.92 4.92 0 0 0-8.4 4.48A14 14 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 5 5 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.1 2.1c-.4 0-.8-.02-1.2-.07a14 14 0 0 0 7.55 2.2c9.06 0 14-7.5 14-14v-.6a10 10 0 0 0 2.45-2.54z"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Discover</h4>
            <a href="/indoor" className={styles.link}>Indoor Plants</a>
            <a href="/outdoor" className={styles.link}>Outdoor Plants</a>
            <a href="/rare" className={styles.link}>Rare Species</a>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <a href="/care" className={styles.link}>Plant Care</a>
            <a href="/faq" className={styles.link}>FAQ</a>
            <a href="/contact" className={styles.link}>Contact Us</a>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <a href="/about" className={styles.link}>Our Story</a>
            <a href="/blog" className={styles.link}>Plant Blog</a>
            <a href="/sustainability" className={styles.link}>Sustainability</a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© {new Date().getFullYear()} Plantify. Cultivating green spaces.</p>
        <div className={styles.legalLinks}>
          <a href="/privacy" className={styles.legalLink}>Privacy</a>
          <a href="/terms" className={styles.legalLink}>Terms</a>
          <a href="/cookies" className={styles.legalLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;