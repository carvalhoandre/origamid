import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { UserContext } from "../../../../context/userContext";
import { useMedia } from "../../../../hooks/useMedia";

import Exit from "../../../../assets/sair.svg?react";
import MyPhotos from "../../../../assets/feed.svg?react";
import Post from "../../../../assets/adicionar.svg?react";
import Stats from "../../../../assets/estatisticas.svg?react";

import styles from "./styles.module.css";

const UserHeaderNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isMobile = useMedia("(max-width: 40rem)");
  const { userLogout } = React.useContext(UserContext);

  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleLogout() {
    userLogout();

    navigate("/login");
  }

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink end to="/account">
          <MyPhotos />
          {isMobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="stats">
          <Stats />
          {isMobile && "Estatísticas"}
        </NavLink>

        <NavLink to="post">
          <Post />
          {isMobile && "Adicionar Foto"}
        </NavLink>

        <button onClick={handleLogout}>
          <Exit />
          {isMobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export { UserHeaderNav };
