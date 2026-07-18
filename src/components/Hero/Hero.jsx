import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ReviewStats from '../ReviewStats/ReviewStats';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotateY: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20, delay: 0.4 } 
  }
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Hero = () => {
  return (
    <main className={styles.heroMain}>
      <div className={styles.heroGrid}>
        
        {/* Left Column */}
        <motion.div 
          className={styles.leftCol}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.mainHeading} variants={itemVariants}>
            Build.<br />
            Train.
          </motion.h1>
          
          <motion.div className={styles.descriptionBox} variants={itemVariants}>
             <p className={styles.subHeading}>
               Where builders train and businesses grow
             </p>
             <p className={styles.paragraph}>
               TechSquarers is a tech agency and learning platform for the next generation of builders. We help businesses launch digital products, while training developers with real, hands on skills.
             </p>
          </motion.div>
          
          <motion.div className={styles.ctaContainer} variants={itemVariants}>
             <button className={styles.ctaButton}>
               <span>Start a project</span>
               <div className={styles.ctaIconBox}>
                 <ArrowUpRight strokeWidth={3} size={20} />
               </div>
             </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ReviewStats />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <motion.div 
            className={styles.imageContainer}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
             <motion.img 
                src="/hero-image.png" 
                alt="3D Glassmorphism cubes" 
                className={styles.heroImage} 
                animate={floatingAnimation}
             />
          </motion.div>
          
          <motion.h1 
            className={styles.launchHeading}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.8 }}
          >
            Launch.
          </motion.h1>
        </div>
      </div>
    </main>
  );
};

export default Hero;
