import React from "react";

const FooterStyles: React.CSSProperties = {
  rowGap: "2rem",
  borderTop: "1px solid rgb(242, 242, 242)",
};

const ContentStyles: React.CSSProperties = {
  display: "block",
  margin: "1em 0 1em 0",
  textAlign: "center",
    fontSize: "0.8rem",
    color: "#666"
};

const Footer = () => {
  return (
    <footer style={FooterStyles}>
      <div style={ContentStyles}>
        <p>&#169; André Leite Carvalho. Alguns direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
