import { Link } from 'react-router-dom'

const BlogPostList = () => {
    return (
        <section className="w-full relative max-w-screen-lg p-8 sm:p-8 border-2 custom-border sm:px-8 py-8">
            <span className="absolute -top-3 left-4 sm:left-6 px-2 font-mono text-grey bg-black">
            my posts
            </span>
            <div className="flex-1 flex-col gap-2 hover:bg-white/15">
                {/* <Link to="/my-posts/test" className="text-white text-opacity-80"> [1] testing post </Link> */}
                <Link to="/layout" className="text-white text-opacity-80"> [1] testing post </Link>
            </div>
        
        </section>
    );
}

export default BlogPostList; // Make sure to have this line


// when you click on a p tag // might need to make this a list tbh, redirect to blog entries