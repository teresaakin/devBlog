// import { Outlet } from "react-router-dom" ?
import Footer from "../footer";

const BlogLayout = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Back button container - absolutely positioned */}
      <div className="absolute lg:fixed left-4 top-8 lg:left-8 lg:mt-20 lg:ml-28">
        <button className="h-12 px-4 border-2 custom-border">
          Back
        </button>
      </div>
      {/* Main content container */}
      <div className="flex items-center justify-center px-4 py-8 md:px-8">
        <div className="max-w-4xl w-full mt-20"> {/* Added mt-16 to account for the back button space */}
          <div className="space-y-5">
            <section className="relative w-full border-2 custom-border p-6 md:p-8">
              <span className="absolute -top-3 left-4 px-2 font-mono text-grey bg-black">
                title
              </span>
              <div className="space-y-2">
                <h1 className="text-2xl">Blog Post Title</h1>
                <h2 className="text-base text-gray-400">Blog Post 2 Subheading</h2>
                <h3 className="text-sm text-gray-500">[Blog Post 3 Date]</h3>
              </div>
            </section>

            <section className="relative w-full border-2 custom-border p-6 md:p-8">
              <article>
                <p className="whitespace-normal break-words">
                  Body Text
                </p>
              </article>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

