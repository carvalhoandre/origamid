import React from "react";
import styles from "./styles.module.css";

const Image = ({ alt, ...props }) => {
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setShowSkeleton(false);

    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {showSkeleton && <div className={styles.skeleton}></div>}

      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export { Image };
