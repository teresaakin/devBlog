import React from "react";
import BehindTheScreen from "../BehindTheScreen"; // navigates up to src
import BlogPostList from "../BlogPostList";
import MyDailyActivity from "../MyDailyActivity";
import Footer from "../footer";

const Home = () => {
  return (
    <div className="w-full mx-auto md:px-8 py-8 max-w-screen-lg px-4 min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 flex-grow">
        <BehindTheScreen />
        <BlogPostList />
        <MyDailyActivity />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
