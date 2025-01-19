import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogPosts } from "../BlogPostData";
import Footer from "../Footer";

// this contains all the blog post data for each post (title, subheading, body etc.)

// to display the data of the blog post instead of slug, need to
// map the slug parameter to the corresponding data in blog posts array
const BlogPostEntries = () => {
  const { slug } = useParams();

  // blog post data array via blog post list
  // gonna find a better way to optimize this later

  // find the blog post that matches the slug using the find method?
  const blogPost = blogPosts.find((post) => post.slug === slug);

  return (
    // <div>
    //           <h1> { blogPost.title } </h1>
    //           <p>This is the content of the blog post: { blogPost.title } </p>
    // </div>

    <div className="relative min-h-screen w-full">

      
      {/* Back button container - absolutely positioned */}
      <div className="absolute lg:fixed left-4 top-8 lg:left-8 lg:mt-20 lg:ml-28">
        {/* this link links us back to the home page when we click the back button */}
        <Link to="/">
          <button className="h-12 px-4 border-2 custom-border hover:bg-white/15 transition-all duration-200 ease-out">
            Back
          </button>
        </Link>
      </div>
      {/* Main content container */}
      <div className="flex items-center justify-center px-4 py-8 md:px-8">
        <div className="max-w-4xl w-full mt-20">
          {/* Added mt-16 to account for the back button space */}
          <div className="space-y-5">
            <section className="relative w-full border-2 custom-border p-6 md:p-8">
              <span className="absolute -top-3 left-4 px-2 font-mono text-grey bg-black">
                title
              </span>
              <div className="space-y-2">
                <h1 className="text-2xl">{blogPost.title}</h1>
                <h2 className="text-base text-gray-400">
                  {blogPost.subheading}
                </h2>
                <h3 className="text-sm text-gray-500">{blogPost.postDate}</h3>
              </div>
            </section>

            <section className="relative w-full border-2 custom-border p-6 md:p-8">
              <article>
                {/* <p className="whitespace-normal break-words">{blogPost.body}</p> */}
                <p className="whitespace-normal break-words mb-10 indent-10">
                  I started this blog to: document my journey, practice my
                  writing skills, and grow more confident in allowing myself to
                  be seen. Creating a space where I can practice my writing,
                  keep track of my progress, and yap about my projects seemed
                  like a fun thing to do this new year!
                </p>

                <p className="whitespace-normal break-words mb-10 indent-10">
                  I played with the idea of having a blog years ago! I had a
                  Tumblr where I’d post a lot of art, fashion, and music
                  content, but that’s been inactive for a while now.
                </p>

                <p className="whitespace-normal break-words mb-10 indent-10">
                  I always enjoyed tuning into behind the scenes content. From
                  rehearsals, fashion shows, studio sessions, etc. I loved
                  learning the stories and ideas behind creative concepts.
                </p>

                <p className="whitespace-normal break-words mb-16 indent-10">
                  Now that school’s out the way, I feel like I’m in a space in
                  my life right now where I have the freedom to explore a
                  variety of interests and find my path. I actually have a
                  really exciting passion project launching soon! It’s lowkey
                  one of my childhood dreams come true. This current chapter of
                  my life is quite scary honestly, but I’m learning to be
                  patient and enjoy the ride.
                </p>

                <p className="whitespace-normal break-words">
                  Thank you for reading!
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

export default BlogPostEntries;
