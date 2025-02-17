import React from "react";

const styles: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-3)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap-s)",
  height: "var(--gap-s)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const Loading = () => {
  return <div style={styles}></div>;
};

export default Loading;
