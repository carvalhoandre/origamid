import React from "react";

import styles from "./styles.module.css";

const Graphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    setSum(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
  }, []);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div>
        <p className={styles.sum}>Acessos: {sum}</p>
      </div>
    </section>
  );
};

export { Graphs };
