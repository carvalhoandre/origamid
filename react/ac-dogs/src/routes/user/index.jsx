import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./components/header";

import { Feed } from "../../components/feed";
import { UserStats } from "../../pages/userStats";
import { UserPhotoPost } from "../../pages/userPhotoPost";

import styles from "./styles.module.css";

const User = () => {
  return (
    <section className="container">
      <UserHeader />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export { User };
