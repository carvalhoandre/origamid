import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../../../context/userContext";

import MyPhotos from "../../../../assets/feed.svg?react";
import Stats from "../../../../assets/estatisticas.svg?react";
import Post from "../../../../assets/adicionar.svg?react";
import Exit from "../../../../assets/sair.svg?react";

import styles from "./styles.module.css";

const UserHeaderNav = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();

    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink end to="/account">
        {mobile && "Minhas Fotos"}
        <MyPhotos />
      </NavLink>
      <NavLink to="stats">
        {mobile && "Estatísticas"}

        <Stats />
      </NavLink>
      <NavLink to="post">
        {mobile && "Adicionar Foto"}

        <Post />
      </NavLink>

      <button onClick={handleLogout}>
        {mobile && "Sair"}
        <Exit />
      </button>
    </nav>
  );
};

export { UserHeaderNav };
