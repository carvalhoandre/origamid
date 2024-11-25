import React from "react";

import { VictoryPie, VictoryChart, VictoryBar } from "victory";

import styles from "./styles.module.css";

const Graphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => ({
      x: item.title,
      y: Number(item.acessos),
    }));

    setGraph(graphData);
    setSum(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
  }, []);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.sum} ${styles.graphItem}`}>
        <p className={styles.sum}>Acessos: {sum}</p>
      </div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export { Graphs };
