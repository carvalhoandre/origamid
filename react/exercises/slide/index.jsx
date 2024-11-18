import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPostion] = React.useState(0);

  const contentRef = React.useRef();

  const isActiveNext = active < slides.length - 1;
  const isActivePrev = active > 0;

  const slidePrev = () => {
    if (isActivePrev) setActive(active - 1);
  };

  const slideNext = () => {
    if (isActiveNext) setActive(active + 1);
  };

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();

    setPostion(-(width * active));
  }, [active]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={styles.item}
            style={{ transform: `translateX(${position}px)` }}
            ref={contentRef}
          >
            <p>{slide.text}</p>
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button onClick={slidePrev} disabled={!isActivePrev}>
          Anterior
        </button>
        <button onClick={slideNext} disabled={!isActiveNext}>
          Próximo
        </button>
      </nav>
    </section>
  );
};

export default Slide;
