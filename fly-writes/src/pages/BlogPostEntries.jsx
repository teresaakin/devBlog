import { useParams } from "react-router-dom"

const BlogPostEntries = () => {

    const { slug } = useParams();

    return (
        <h1>Blog Post</h1>
    
    );
}


export default BlogPostEntries;
