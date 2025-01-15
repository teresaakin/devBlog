import React from "react";
import BehindTheScreen from "../BehindTheScreen";
import BlogPostList from "../BlogPostList";
import MyDailyActivity from "../MyDailyActivity";
import Footer from "../footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-center px-4 py-8 md:px-8 mt-20">
        <div className="w-full max-w-4xl"> {/* Using the same max-w-4xl as blog layout */}
          <div className="space-y-5">
            <BehindTheScreen />
            <BlogPostList />
            <MyDailyActivity />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;