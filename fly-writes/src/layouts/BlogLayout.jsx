// import { Outlet } from "react-router-dom" ?
import Footer from "../footer";

const BlogLayout = () => {
  return (
    // container for the entire layout
    <div className="py-2 px-8">
      <div className="">
        <button className="py-2 px-4 border-2 custom-border">Go back</button>
        <section className="relative max-w-screen-lg mx-auto p-8 sm:p-8 my-8 border-2 custom-border">
          <span className="absolute -top-3 left-4 sm:left-6 px-2 font-mono text-grey bg-black">
            title
          </span>
          <h1 className="text-2xl">Blog Post Title</h1>
          <h2 className="text-base">Blog Post 2 Subheading</h2>
          <h3 className="text-sm">[Blog Post 3 Date]</h3>
        </section>
      </div>
      <section className="relative max-w-screen-lg mx-auto p-8 sm:p-8 my-8 border-2 custom-border">
        <article>
          <p>
            Blog post body text. Hi everyone! I'm learning react router. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default BlogLayout;
