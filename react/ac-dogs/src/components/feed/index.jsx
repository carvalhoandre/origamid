import React from "react";
import PropTypes from "prop-types";

import { FeedModal } from "./components/feedModal";
import { FeedPhotos } from "./components/feedPhotos";

import styles from "./styles.module.css";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (!infinite) return;

      const scroll = window.scrollY;
      const heightPage = document.body.offsetHeight - window.innerHeight;

      if (scroll > heightPage * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);

        wait = true;

        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div className={styles.container}>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map((page, index) => (
        <FeedPhotos
          key={page + index}
          user={user}
          page={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.PropTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export { Feed };
