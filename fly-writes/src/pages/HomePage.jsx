import React from "react";
import BehindTheScreen from "../BehindTheScreen"; // navigates up to src
import BlogPostList from "../BlogPostList";
import MyDailyActivity from "../MyDailyActivity";
import Footer from "../footer";

const Home = () => {
  return (
    <>
      <BehindTheScreen />
      <BlogPostList />
      <MyDailyActivity />
      <Footer />
    </>
  );
};

export default Home;
