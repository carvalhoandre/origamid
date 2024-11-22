import { FeedModal } from "./components/feedModal";
import { FeedPhotos } from "./components/feedPhotos";

import styles from "./styles.module.css";

const Feed = () => {
  return (
    <div className={styles.container}>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export { Feed };
