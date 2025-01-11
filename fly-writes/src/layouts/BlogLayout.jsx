// import { Outlet } from "react-router-dom" ?
import Footer from "../footer";

const BlogLayout = () => {
  return (

    <div className="min-h-screen w-full px-4 py-8 md:px-8">
      <div className="mx-auto max-w-screen-lg mt-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">

          <div className="self-start"> {/* Added this wrapper to prevent button from expanding
          matching the size of the other sections */}
            <button className="h-12 px-4 border-2 custom-border whitespace-nowrap">
              Back
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-5">
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
                  Blog post body text. Hi everyone! I'm learning react router.
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

