import { CircleUserRound, Heart, Archive } from "lucide-react";

import styles from "../styles/demo.module.css";

const InstagramPostSkeleton = () => {
  return (
    <article className={styles.skeleton}>
      <section className={styles.InstagramWrapper}>
        <article className={styles.Header}>
          <CircleUserRound className={styles.Header__Icon} size={38} />
          <div className={styles.HeaderText}>
            <p className={styles.Header__Name}></p>
            <p className={styles.Header__Date}></p>
          </div>
        </article>

        <article className={styles.Content}></article>

        <article className={styles.Footer}>
          <section className={styles.FooterActions}>
            <button className={styles.FooterActions_Button} disabled>
              <Heart size={20} />
            </button>
            <p className={styles.likeCount}></p>
            <button className={styles.FooterActions_Button} disabled>
              <Archive size={20} />
            </button>
          </section>
          <p className={styles.FooterText}></p>
        </article>
      </section>
    </article>
  );
};

export default InstagramPostSkeleton;
