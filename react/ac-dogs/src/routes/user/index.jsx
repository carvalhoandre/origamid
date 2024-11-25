import React from "react";
import { Route, Routes } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import { UserHeader } from "./components/header";

import { Feed } from "../../components/feed";
import { NotFound } from "../../pages/notFound";
import { UserStats } from "../../pages/userStats";
import { UserPhotoPost } from "../../pages/userPhotoPost";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export { User };
