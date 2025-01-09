import HomePage from "./pages/HomePage";
import BlogPostEntries from "./pages/BlogPostEntries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogLayout from "./layouts/BlogLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/layout" element={<BlogLayout />} />

        {/* Blog Post Route */}
        <Route path="/my-posts/:id" element={<BlogPostEntries />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <>
//       <BehindTheScreen />
//       <Router>
//         <Routes>
//           <Route path="/" element={<MyBlogPosts />} />
//           <Route path="/blog:slug" element={<BlogPostEntries />} />
//         </Routes>
//       </Router>
//       <MyDailyActivity />
//       <Footer />
//     </>
//   );
// }

export default App;
