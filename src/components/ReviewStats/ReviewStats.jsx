import React from 'react';
import { Star } from 'lucide-react';
import styles from './ReviewStats.module.css';

const ReviewStats = () => {
  return (
    <div className={styles.reviewContainer}>
      {/* Avatars */}
      <div className={styles.avatarGroup}>
        <div className={styles.avatars}>
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              className={styles.avatar}
              src={`https://i.pravatar.cc/150?img=${i + 30}`}
              alt={`Reviewer ${i}`}
            />
          ))}
        </div>
        <div className={styles.ratingInfo}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className={styles.starIcon} />
            ))}
          </div>
          <span className={styles.reviewCount}>500+ Reviews</span>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Stats */}
      <div className={styles.stats}>
        <span>50+ Students Trained</span>
        <div className={styles.statsDivider}></div>
        <span>20+ Project Delivered</span>
      </div>
    </div>
  );
};

export default ReviewStats;
