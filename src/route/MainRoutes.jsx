import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Search from "../pages/Search";
import Inbox from "../pages/Inbox";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page/:pageId" element={<Page />} />
      <Route path="/search" element={<Search />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/page" element={<Page />} />
    </Routes>
  );
};

export default MainRoutes;
